import { useState } from "react";
import ButtonDecrement from "./components/ButtonDecrement";
import ButtonIncrement from "./components/ButtonIncrement";

function App() {
  const [count, setCount] = useState(0)
  
  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    setCount(count-1)
  }
  
  return (
   

    <div class="bg-gradient-to-r from-sky-500 to-indigo-500 p-6">

            <h1 class="max-w-3xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">¡Challenge number two! </h1>
            <h2 class="text-4xl font-bold dark:text-white">Current counter: {count}</h2>
          
           <p class="m-3">
            <ButtonIncrement text="Aumentar" onClick={handleIncrement} />
            <ButtonDecrement text="Disminuir" onClick={handleDecrement} />
           </p>
          
    </div>


  
  );
}

export default App;
