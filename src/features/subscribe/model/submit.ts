import type { FormState } from './schema';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEMO_ERROR =
  'Ошибка: при первой попытке сабмита - демо ошибки, при второй - будет успех';

const handleStepBack = (previousState: FormState) => {
  return {
    ...previousState,
    step: previousState.step > 1 ? previousState.step - 1 : 1,
    error: null,
  };
};

const handleStep1 = async (previousState: FormState, formData: FormData) => {
  const email = formData.get('email');
  if (!email) return { ...previousState, error: 'Введите email', step: 1 };

  await new Promise((resolve) => setTimeout(resolve, 1000)); //симуляция запроса на сервер

  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return {
      data: {
        ...previousState.data,
        email: typeof email === 'string' ? email : '',
      },
      error: 'Невозможно подписаться - некорректный email',
      step: 1,
    };
  }

  return { step: 2, data: { ...previousState.data, email }, error: null };
};

const handleStep2 = async (previousState: FormState, formData: FormData) => {
  const newsletter = Boolean(formData.get('newsletter'));
  const promo = Boolean(formData.get('promo'));
  const partner = Boolean(formData.get('partner'));

  if (!newsletter && !promo && !partner) {
    return {
      step: 2,
      data: previousState.data,
      error: 'Выберите хотя бы один вариант',
    };
  }

  console.log(previousState);

  await new Promise((resolve) => setTimeout(resolve, 800));
  const isError = !(previousState.error === DEMO_ERROR); //демо ошибки при первой попытке сабмита, при второй - успех
  return {
    step: 2,
    data: { ...previousState.data, newsletter, promo, partner },
    error: isError ? DEMO_ERROR : null,
    success: !isError,
  };
};

export async function submit(
  previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const currentStep = Number(formData.get('step') ?? 1);

  if (currentStep === -1) {
    return handleStepBack(previousState);
  }

  if (currentStep === 1) {
    return handleStep1(previousState, formData);
  }

  if (currentStep === 2) {
    return handleStep2(previousState, formData);
  }

  return { ...previousState };
}
