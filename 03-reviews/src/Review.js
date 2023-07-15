import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  console.log(Math.random()*4);
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = (index + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = (index - 1);
      if(newIndex < 0){
        newIndex =  people.length - 1;
      }
      return newIndex;
    });
  };


  const randomPerson = ()=>{
    setIndex((index)=>{
      let newIndex =Math.floor(Math.random() * people.length);
      if(newIndex == index){
        newIndex +=1;
      }
      return newIndex;
    })
  }


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Random Review</button>
    </article>


  );
};

export default Review;
