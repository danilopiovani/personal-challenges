import { FaCheck } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import styles from './index.module.css';

export interface IChallengeCard {
  steps: string[];
  currentStep: number;
  complete: boolean;
}

const StepProgressBar: React.FC<IChallengeCard> = ({
  steps,
  currentStep,
  complete,
}) => {
  return (
    <div className="flex justify-between border rounded-lg p-3">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`${styles.step_item} ${
            currentStep === i + 1 && styles.active
          } ${(i + 1 < currentStep || complete) && styles.complete} `}
        >
          <p
            className={`text-white text-3xl ${
              currentStep === i + 1 && 'text-sky-600'
            } ${i + 1 < currentStep || complete ? 'text-white' : ''}`}
          >
            <GiChemicalDrop />
          </p>

          <div className={styles.step}>
            {i + 1 < currentStep || complete ? <FaCheck size={24} /> : i + 1}
          </div>
          <p className="text-slate-500 uppercase">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default StepProgressBar;
