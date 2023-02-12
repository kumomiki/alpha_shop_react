import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg'
import styles from './ProgressControl.module.scss'

export default function ProgressControl({currentStep, handleClickPrev, handleClickNext}){
  return (
    <section className={styles.buttonContainer}>
      <section className={styles.buttonWrapper}>
        <button
        onClick={handleClickPrev}
        disabled={currentStep === 1 && true}
        className={`${styles.buttonPrev} ${styles.button}`}>
          <LeftArrow className={styles.arrowLeft}/>
          <div className={styles.buttonText}>上一步</div>
        </button>
        <button
        onClick={handleClickNext}
        className={`${styles.buttonNext} ${styles.button}`}>
          <div className={styles.buttonText}>{currentStep === 3? '確認下單': '下一步'}</div>
          {currentStep < 3 && <RightArrow className={styles.arrowRight}/>}
        </button>
      </section>
    </section>
  )
}