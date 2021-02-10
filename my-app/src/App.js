
import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  
  const [count, setCount] = useState(0)
  const [likes, setLikes] = useState('likes')

  useEffect(() => count === 1 ? setLikes('like') : setLikes('likes'),[count])

  //end the useEffect arg with an array of what you want the effect to watch.
  
  return (
    <div className="myButton">
      <button className="btn" onClick={() => setCount(count + 1)}>{count} {likes}
      </button>
    </div>
  );
  }
