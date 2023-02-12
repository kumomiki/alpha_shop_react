import formStyles from './From.module.scss'

export default function Form({children}){
  return (
    <form className={formStyles.formContainer}>
    {children}
    </form>
  )
}