import  {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import StatsPanel from "./components/StatsPanel";

function App() {

 const [input, setInput] = useState('');
 const [quantity, setQuantity] = useState(1);
 const [items, setItems] = useState([]);

  const getDescription = (e) => {
        const {target} = e;
        const value = target.value;
        setInput(value)
  }

  const getQuantity = (e) => {
    const {target} = e;
    const value = target.value;
    setQuantity(+value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    const newItem = {
      description: input,
      quantity: quantity,
      id: Math.trunc(Date.now()),
      packed: false,
    }

   
    setItems((prevState) => ([...prevState, newItem]));

    setInput('');
    setQuantity(1);
  }


  const handleCheckPacked = (id) => { // get the id of the checkbox
      setItems((prevState) => ( // get the previous state
        prevState.map((item) => ( // map over it
          // if the prevState iteration id == id, then create a new object and reverse the value of of packed otherwise return the item
          item.id === id ? {...item, packed: !item.packed} : item
        ))
      ))
  }



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
        />
      
       {items.length > 0 && <List items={items} onHandleCheck={handleCheckPacked}/>}
       <StatsPanel itemsLength={items.length} />
      </div>
  );
}

export default App;
