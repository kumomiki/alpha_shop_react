import Form from './Form.js'
import {InputGroup, FormRow} from './StepOne'
import styles from './StepThree.module.scss'



export default function StepThree(){
  return (
    <Form>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody}>
        <FormRow>
          <InputGroup 
             id= "card__name"
             type="text"
             label= "持卡人姓名"
             placeholder= "John Doe"
             name="cardName"  />
        </FormRow>
        <FormRow>
          <InputGroup 
             id="card__number"
             type="text"
             label="卡號"
             placeholder="1111 2222 3333 4444"
             maxLength="16"
             name="cardNum"/>
        </FormRow>
        <FormRow>
          <InputGroup 
             id="card__date"
             type="text"
             label="有效期限"
             placeholder="MM/YY"
             maxLength='4'
             name="cardDate"  />

          <InputGroup 
             id="card__cvc"
             type="text"
             label="CVC / CCV"
             placeholder="123"
             maxLength="3"
             name="cardCvc"/>
        </FormRow>
      </section>
    </Form>
  )
}