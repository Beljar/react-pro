import type { FormState } from '.';

export type StepProps = {
  state: FormState;
  formAction: (payload: FormData) => void;
  isPending: boolean;
};
