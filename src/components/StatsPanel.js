import React from 'react'

const StatsPanel = ({items}) => {


  const filteredPacked = items?.filter((item) => item.packed).length;

  return (
    <p className="stats">
   <em>You have {items?.length || 0} items on your list, and you already packed {filteredPacked} (0%)</em>
  </p>
  )
}

export default StatsPanel