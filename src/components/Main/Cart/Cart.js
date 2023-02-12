import { useContext } from 'react'
import { ReactComponent as PlusButton } from '../../../icons/plusButton.svg'
import { ReactComponent as MinusButton } from '../../../icons/minusButton.svg'
import styles from './Cart.module.scss' 
import { CartContext } from '../CartContext.js'


function ProductList ({handlePlus, handleMinus, products}){
  const productItems = products.map(product => 
      <div className={styles.productContainer} key={product.id}>
        <img className={styles.productImage} src={product.img} alt={product.name} />
        <div className={styles.productInfo}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.buttonControlContainer}>
            <div className={styles.buttonControlWrapper}>
              <PlusButton className={styles.controlButton} 
              onClick={()=>handlePlus(product.id)}/>
              <span className={styles.productCount}>{product.quantity}</span>
              <MinusButton className={styles.controlButton} 
              onClick={()=>handleMinus(product.id)}/>
            </div>
          </div>
        </div>
        <div className={styles.productPrice}>${product.price}</div>
      </div>
    )

    return <div className={styles.productList}>{productItems}</div>
}

export default function Cart(){
  const {currentProducts, setCurrentProducts, totalPrice} = useContext(CartContext)


  function handleClickPlus(id){
    setCurrentProducts(currentProducts.map(product => {
      if(product.id === id){
        return {
        ...product,
        price: product.id === '1'? product.price + 50 : product.price + 200,
        quantity: product.quantity + 1
        }
      }else{
        return product
      }
    }))
  }

  function handleClickMinus(id){
    let newCurrentProducts = currentProducts.map(product => {
      if(product.id === id && product.quantity !== 0){
        return {
          ...product,
          price: product.id === '1'? product.price - 50: product.price - 200,
          quantity: product.quantity - 1
        }
      }else{
        return product
      }
    })

    newCurrentProducts = newCurrentProducts.filter(p => p.quantity > 0)

    setCurrentProducts(newCurrentProducts)

  }




  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList
      products={currentProducts}
      handleMinus={handleClickMinus}
      handlePlus={handleClickPlus}/>
      <div className={styles.cartInfo}>
        <div className={styles.cartText}>運費</div>
        <div className={styles.cartPrice}>免費</div>
      </div>
      <div className={styles.cartInfo}>
        <div className={styles.cartText}>小計</div>
        <div className={styles.cartPrice}>${totalPrice()}</div>
      </div>
    </section>
    

  )
}