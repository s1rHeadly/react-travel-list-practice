import React from 'react'
import SelectOrdering from './SelectOrdering';
import ListItem from './ListItem';

const List = ({items, onHandleCheck}) => {
  return (
    <div className="list">
    <ul>
      {items.map((item) => (
        <ListItem item={item} key={item.id} onHandleCheck={onHandleCheck}/>
      ))}
    </ul>
    <SelectOrdering />
  </div>
  )
}

export default List