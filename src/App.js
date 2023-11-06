import  {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import StatsPanel from "./components/StatsPanel";

function App() {

 const [input, setInput] = useState('');
 const [quanity, setQuantity] = useState(0);

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


  return (
      <div className="app">
        <Header
        onhandleDescription={getDescription}
        input={input}
        onGetQuantity={getQuantity}
        quanity={quanity}

        />

        <List />
       <StatsPanel />
      </div>
  );
}

export default App;
