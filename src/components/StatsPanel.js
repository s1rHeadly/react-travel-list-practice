import React from 'react'

const StatsPanel = ({items}) => {


  const numItems = items?.length;
  const numPacked = items?.filter((item) => item?.packed).length;

 
  return (
    <p className="stats">
   <em> 💼 You have {numItems} items on your list, and you already packed {numPacked}</em>
  </p>
  )
}

export default StatsPanel