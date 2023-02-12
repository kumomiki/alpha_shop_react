import styles from './Main.module.scss'
import Progress from '../components/Main/Progress'
import Cart from '../components/Main/Cart/Cart'
import { CartContextProvider } from './Main/CartContext.js'
import { FormContextProvider } from './Main/FromContext.js'

export default function Main(){
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <FormContextProvider>
         <CartContextProvider>
           <Progress />
           <Cart />
         </CartContextProvider>
        </FormContextProvider>
      </div>
    </main>
  )
}