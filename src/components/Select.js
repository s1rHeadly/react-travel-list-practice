import React from 'react'

const Select = ({amount, value, onChange}) => {

  const numbersArray = Array.from({length: amount}, ((_, index) => index + 1));

  return (
    <select value={value} onChange={onChange}>
    {numbersArray.length > 0 && numbersArray.map((index) => <option value={index} key={index}>{index}</option>)}
    </select>
  )
}

export default Select