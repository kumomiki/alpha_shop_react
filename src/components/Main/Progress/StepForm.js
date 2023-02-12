import StepOne from './StepForm/StepOne'
import StepTwo from './StepForm/StepTwo'
import StepThree from './StepForm/StepThree'

export default function StepForm({currentStep}){
  return (
    <>
    {currentStep === 1 && <StepOne />}
    {currentStep === 2 && <StepTwo />}
    {currentStep === 3 && <StepThree />}
    </>
  )
}