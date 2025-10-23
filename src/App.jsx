
import { useState, useEffect } from "react";
import './App.css';
import { List, EmptyMessage } from './components'

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [isEmptyItems, setIsEmptyItems] = useState(true)


  function addItem() {
    const trimmed = text.trim();
    if (!trimmed) return;
    if ( items.length !== 0 ) {
      for ( let item of items ) {
        if ( trimmed === item ) {
          setText('');
          return
        }
      }
    }
    setItems(prev => [...prev, trimmed]); 
    setText('');
  }

  function removeItem(index) {
    setItems(prev => prev.filter((_, i) => i !== index));
  }

  function clearItems() {
    setItems([])
  }

  useEffect(() => {
    if (items.length === 0) {
      setIsEmptyItems(true)
    } else {
      setIsEmptyItems(false)
    }
    // console.log(items)
    // console.log(isEmptyItems)
  }, [items])

  return (
    <div style={{ fontFamily: "system-ui", padding: 16, maxWidth: 520 }}>
        <h1>React Dynamic List</h1>
        <label>
          Add item:{" "}
          <input
            value={text}
            onChange={e => setText(e.target.value)}     
            onKeyDown={e => e.key === "Enter" && addItem()}
            placeholder="Type and press Enter"
          />
        </label>
        <button disabled={!text} onClick={addItem} style={{ marginLeft: 8 }}>Add</button>
        <button disabled={isEmptyItems} onClick={clearItems} style={{ marginLeft: 8 }}>Clear List</button>
        {isEmptyItems ? <EmptyMessage /> : <List items = {items} removeItem = {removeItem} />}    
    </div>
  );
}
