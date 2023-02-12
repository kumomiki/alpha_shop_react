import styles from './ProgressStep.module.scss'
import { ReactComponent as DoneCheck } from '../../../icons/DoneCheck.svg'

function Step({currentStep, step, label}){
  return (
    <div className={styles.progressGroup}>
      <div className={currentStep >= step? styles.progressCircleDone : styles.progressCircleUndone}>
        <div className={styles.progressText}>
          {currentStep > step? <DoneCheck/>: step}
        </div>
      </div>
      <div className={currentStep >= step? styles.progressLabelDone : styles.progressLabelUndone}>{label}</div>
    </div>
  )
}

function ProgressLine({className}){
  return <div className={className}></div>
}

export default function ProgressStep({currentStep}) {
  return (
    <div className={styles.progressStepContainer}>
      <h1 className={styles.progressTitle}>結帳</h1>
      <section className={styles.progressWrapper}>
        <Step 
        currentStep={currentStep}
        step={1}
        label='寄送方式'
        />
        <ProgressLine className={styles.progressLineBack}/>
        <Step 
        currentStep={currentStep}
        step={2}
        label='運送方式'
        />
        <ProgressLine className={`${currentStep >= 2 ? styles.progressLineDone : styles.progressLineUndone} ${styles.progressLineNext}`} />
        <Step 
        currentStep={currentStep}
        step={3}
        label='付款資訊'
        />
      </section>
    </div>
  )
}