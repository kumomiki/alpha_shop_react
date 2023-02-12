import Form from './Form.js'
import styles from './StepTwo.module.scss'

function RadioGroup({price, id, name, priceText, period, checked}){
  return (
    <label className={styles.radioGroup} data-price={price}>
    <input type="radio" name="shipping" id={id}  defaultChecked={checked} className={styles.radioBox}/>
      <div className={styles.infoContainer}>
        <div className={styles.infoWrapper}>
          <div className={styles.text}>{name}</div>
          <div className={styles.price}>{priceText}</div>
        </div>
        <div className={styles.period}>{period}</div>
      </div>
    </label>
  )
}

export default function StepTwo(){
  return (
    <Form>
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody}>
        <div className={styles.radioGroupContainer}>
          <RadioGroup
           price='0'
           id='shipping-standard'
           name='標準運送'
           priceText='免費'
           period='約3~7個工作天'
           checked={true}
           ></RadioGroup>
        </div>
        <div className={styles.radioGroupContainer}>
          <RadioGroup
           price='550'
           id='shipping-DHL'
           name='DHL貨運'
           priceText='$500'
           period='48小時內送達'
           checked={false}
           ></RadioGroup>
        </div>
      </section>
    </Form>
  )
}