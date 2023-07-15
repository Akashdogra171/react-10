import React from "react";

const Categories = ({ categories, filterNames }) => {
  return (
    <>
      <div className="btn-container">
        {/* <button className='filter-btn' onClick={()=>filterNames('all')}>all</button>
        <button className='filter-btn' onClick={()=>filterNames('breakfast')}>Breakfast</button> */}

        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterNames(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
