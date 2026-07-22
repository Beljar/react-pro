import styles from './styles.module.scss';

interface IProgressProps {
  step: number;
  stepsCount: number;
}

export const Progress = ({ step, stepsCount }: IProgressProps) => {
  return (
    <>
      {Array.from(Array(stepsCount)).map((_, index) => (
        <span
          key={index + 1}
          className={`${styles.stepDot} ${step >= index + 1 ? styles.active : ''}`}
        >
          {index + 1}
        </span>
      ))}
    </>
  );
};
