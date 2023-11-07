import React from 'react'

const SelectOrdering = () => {
  return (
    <div className="actions">
    <select>
      <option value="input">Sort by input order</option>
      <option value="description">Sort by description</option>
      <option value="packed">Sort by packed status</option>
    </select>
    <button>Clear list</button>
  </div>
  )
}

export default SelectOrdering