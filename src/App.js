import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import StatsPanel from "./components/StatsPanel";

function App() {



  //state variables
  //=============

 const [input, setInput] = useState('');
 const [quantity, setQuantity] = useState(1);
 const [packed, setPacked] = useState(0);
 
 // const [watched, setWatched] = useState([]);
 const [items, setItems] = useState(function () {
  const storedValue = localStorage.getItem("allItems");
  return JSON.parse(storedValue) || [];
});




// derived state
const totalItems = items.length || 0;
let packedNumber = 0; 

 // Pure Functions
 //==================

 //get the description when typed
  const getDescription = (e) => {
        const {target} = e;
        const value = target.value;
        setInput(value)
  }


  // get the value of the selected quantity
  const getQuantity = (e) => {
    const {target} = e;
    const value = target.value;
    setQuantity(+value)
  }


 
  // checkbox handler that updates the packed value with the onChange event
  const handleCheckPacked = (id) => { // param is the id of the selected item

      setItems((prevState) => ( // get the previous state
        prevState.map((item) => ( // map over it
          // if the prevState iteration id == id, then create a new object and reverse the value of of packed otherwise return the item
          item.id === id ? {...item, packed: !item.packed} : item
        ))
      ))

      // set localstorage again to update the data 
      localStorage.setItem('allItems', JSON.stringify(items))

  }



  const handleDeleteItem = (id) => {
       const filterId = items.filter((item) => item.id !== id && item)
       setItems(filterId)
       // localStorage.setItem('allItems', JSON.stringify(items))
  }




  // Submitting the form and passing a new object into the items array
  const submitForm = (e) => {
    e.preventDefault();

    const newItem = {
      description: input ?? 'No description',
      quantity: quantity ?? 1,
      id: Math.trunc(Date.now()),
      packed: false,
    }


     // could put abother condition in here to show a message??

    if(input.length > 3){
      //spreading the new item into the existing state
      setItems((prevState) => ([...prevState, newItem]));

      // reset the fields
      setInput('');
      setQuantity(1);
    }

  }






  const clearData = () => {
    setItems([]);
    // localStorage.setItem('allItems', JSON.stringify(items))
}


  // useEffects
  //=============


  //local storage
  useEffect(() => {
   localStorage.setItem('allItems', JSON.stringify(items))
  }, [items]);





  return (
      <div className="app">
        <Header
        onhandleDescription={getDescription}
        input={input}
        onGetQuantity={getQuantity}
        quanity={quantity}
        title="What do you need for your trip?"
        onSubmitForm={submitForm}
        quantity={quantity}
        onHandleDeleteItem={handleDeleteItem}
        />
      
       {items.length > 0 && <List items={items} onHandleCheck={handleCheckPacked} onHandleDeleteItem={handleDeleteItem} onClearList={clearData}
/>}
       <StatsPanel items={items}/>
      </div>
  );
}

export default App;
