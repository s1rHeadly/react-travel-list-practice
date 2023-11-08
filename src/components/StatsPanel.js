import React from 'react'

const StatsPanel = ({itemsLength, packed}) => {

  return (
    <p className="stats">
   <em>You have {itemsLength} items on your list, and you already packed {packed} (0%)</em>
  </p>
  )
}

export default StatsPanel