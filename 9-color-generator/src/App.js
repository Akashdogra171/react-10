import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    try{
      let colors = new Values(color).all(20);
      setList(colors)
      
    } catch(error){
      console.log(error);
      setError(true);
    }
    
    
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generater</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e)=>{setColor(e.target.value)}}
          placeholder='#f12345'
          className={`${error ? 'error':null}`}
          ></input>
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index)=>{
          return <SingleColor key={index} {...color} index={index} hexColor ={color.hex}/>
        })}
      </section>
    </>
  )
}

export default App
