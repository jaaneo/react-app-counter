import { useState } from "react";
import Button from "./components/Button";


function App() {
  const [count, setCount] = useState(0)
  
  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    setCount(count-1)
  }
  
  return (
   <div>
    <p>{count}</p>
    <Button text="Aumentar" onClick={handleIncrement}/>
    <Button text="Disminuir" onClick={handleDecrement}/>
   </div>
  );
}

export default App;
