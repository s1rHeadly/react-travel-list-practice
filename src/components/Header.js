import React from 'react'
import Input from './Input'
import Select from './Select'
import Button from './Button'

const Header = ({onhandleDescription, input, onGetQuantity, quantity}) => {

  return(
    <>
    <h1>🏝️ Far Away 🧳</h1>
         <form className="add-form">
           <h3>What do you need for your 😍 trip?</h3>
           <Select
           value={quantity}
           amount={10}
           onChange={onGetQuantity}/>
          <Input
          onChange={onhandleDescription}
          value={input}/>
          <Button>Add Item</Button>
          
         </form>
    </>
  )
}

export default Header