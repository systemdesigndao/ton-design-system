import { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(0);
  return <div>
    <span>❤️</span>
    {count}
    <button onClick={() => {
      setCount(prev => ++prev);
    }}>+</button>
  </div>
}
const App = () => {
  return (
    <div className='px-2 py-2 h-full flex flex-col'>
      {Array.from({ length: 1e4 }).map((_, index) => <Like key={`like-component-${index}`} />)}
    </div>
  );
};

export default App;