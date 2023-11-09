import React, { useState } from 'react'
import SelectOrdering from './SelectOrdering';
import ListItem from './ListItem';

const List = ({items, onHandleCheck, onHandleDeleteItem, onClearList}) => {


const [sorted, setSorted] = useState('input');


  let sortedItems;


    const sortOrdering = (e) => {
      
      const {target} = e;
      const selected = target.value;


      switch (selected) {
        case 'input':
          sortedItems = items;
          break;

          case 'description':
          sortedItems = items.sort((a, b) => a.description.localeCompare(b.description));
          break;

          case 'packed':
          sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed));
          break;
      
        default:
          sortedItems = items;
          break;
      }

      console.log(selected)

    }
   
 


  return (
    <div className="list">
    <ul>
      {sortedItems?.map((item) => (
        <ListItem item={item} key={item.id} onHandleCheck={onHandleCheck} onHandleDeleteItem={onHandleDeleteItem}/>
      ))}
    </ul>
    <SelectOrdering>
    <select defaultValue={sorted} onChange={(e) => sortOrdering(e)}>
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