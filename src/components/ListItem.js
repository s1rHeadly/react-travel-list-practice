import React, { useState } from 'react'
import Button from './Button';

const ListItem = ({item, onHandleCheck}) => {

  const {description, quantity, id, packed} = item;


  return (
    <li>
    <input
      type="checkbox"
      value={packed}
      onChange={() => onHandleCheck(id)}
    />

    <span style={packed ? { textDecoration: "line-through" } : {}}> {quantity} {description}</span>

    <Button>❌</Button></li>
  )
}

export default ListItem