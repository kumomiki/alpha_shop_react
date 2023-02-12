import { createContext, useState } from 'react'


const info = {
  cardName:'',
  cardNum:'',
  cardDate:'',
  cardCvc:''
}

const FormContext = createContext()

function FormContextProvider({children}){
  const [formInfo, setFormInfo] = useState(info)

  function handleInputChange(e){
    setFormInfo({ 
      ...formInfo, 
      [e.target.name]: e.target.value 
    })
  }



  return (
    <FormContext.Provider value={{formInfo, setFormInfo, handleInputChange}}>
      {children}
    </FormContext.Provider>
  )

}

export {FormContext, FormContextProvider}