import React from 'react'
import SelectOrdering from './SelectOrdering';
import ListItem from './ListItem';

const List = ({items, onHandleCheck, onHandleDeleteItem, onClearList}) => {
  return (
    <div className="list">
    <ul>
      {items.map((item) => (
        <ListItem item={item} key={item.id} onHandleCheck={onHandleCheck} onHandleDeleteItem={onHandleDeleteItem}/>
      ))}
    </ul>
    <SelectOrdering>
    <select>
      <option value="input">Sort by input order</option>
      <option value="description">Sort by description</option>
      <option value="packed">Sort by packed status</option>
    </select>
    <button onClick={onClearList}>Clear list</button>
    </SelectOrdering>
  </div>
  )
}

export default List