import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({title,info}) => {
  const[showInfo,setSHowInfo] = useState(false);
  const answerHandler=()=>{
    setSHowInfo((prev)=>{
      return !prev
    })
  }
  return(
    <main className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={answerHandler}>{showInfo ?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
      </header>
      {showInfo && <p>{info}</p>}
    </main>
  )

  
};

export default Question;
