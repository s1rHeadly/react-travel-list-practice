import React from 'react'

const StatsPanel = ({itemsLength}) => {
  return (
    <p className="stats">
   <em>You have {itemsLength} items on your list, and you already packed 0 (0%)</em>
  </p>
  )
}

export default StatsPanel