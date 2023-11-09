import React, { useState } from 'react'
import SelectOrdering from './SelectOrdering';
import ListItem from './ListItem';

const List = ({items, onHandleCheck, onHandleDeleteItem, onClearList}) => {


  const [sortBy, setSortBy] = useState("input");


  let sortedItems = [...items];


  const sortByLookupMap = {
    description: (a, b) => a.description.localeCompare(b.description),
    packed: (a, b) => Number(a.packed) - Number(b.packed),
  }

  if(sortByLookupMap[sortBy]){
    sortedItems = [...items].sort(sortByLookupMap[sortBy])
  }



  // if (sortBy === "input") sortedItems = [...items];

  // if (sortBy === "description")
  //   sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));

  // if (sortBy === "packed")
  //   sortedItems = [...items]
  //     .slice()
  //     .sort((a, b) => Number(a.packed) - Number(b.packed));



// switch (sortBy) {
 
//     case 'description':
//       sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
//     break;

//     case 'packed':
//       sortedItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
//     break;

//   default:
// }
 





  return (
    <div className="list">
    <ul>
      {sortedItems?.map((item) => (
        <ListItem item={item} key={item.id} onHandleCheck={onHandleCheck} onHandleDeleteItem={onHandleDeleteItem}/>
      ))}
    </ul>
    <SelectOrdering>
    <select defaultValue={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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