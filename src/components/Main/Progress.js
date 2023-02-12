import{ useState, useContext } from 'react'
import ProgressStep from "./Progress/ProgressStep";
import StepForm from "./Progress/StepForm";
import ProgressControl from "./Progress/ProgressControl";
import styles from './Progress.module.scss'
import { FormContext } from '../Main/FromContext.js'
import { CartContext } from '../Main/CartContext.js';


export default function Progress(){
  const [currentStep, setCurrentStep] = useState(1)
  const { formInfo } = useContext(FormContext)
  const { totalPrice } = useContext(CartContext)

  function handleClickPrev(){
    if(currentStep > 1){
      setCurrentStep(currentStep - 1)
    }
  } 
  function handleClickNext(){
    if(currentStep < 3){
      setCurrentStep(currentStep + 1)
    }
    if(currentStep === 3){
      console.log(`total price: ${totalPrice()}`)
      console.log(formInfo)
    }

  }




  return (
    <section className={styles.progressContainer}>
     <ProgressStep 
      currentStep={currentStep}/>
     <StepForm
      currentStep={currentStep}/>
     <ProgressControl
     currentStep={currentStep}
     handleClickNext={handleClickNext}
     handleClickPrev={handleClickPrev}/>
    </section>
  )
}