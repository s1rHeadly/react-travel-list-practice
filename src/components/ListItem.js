import React from 'react'
import Button from './Button';

const ListItem = ({item, onHandleCheck, onHandleDeleteItem}) => {

  const {description, quantity, id, packed} = item;


  return (
    <li>
    <input
      type="checkbox"
      value={packed}
      onChange={() => onHandleCheck(id)}
    />

    <span style={packed ? { textDecoration: "line-through" } : {}}> {quantity} {description}</span>

    <Button onClick={() => onHandleDeleteItem(id)}>❌</Button></li>
  )
}

export default ListItem