import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =  ['all',...new Set(items.map((item)=>item.category))];
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories)

  const filterNames = (category)=>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item)=>item.category === category);
    setMenuItems(newItem)
  }
  return <>
    <section className='menu-section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterNames = {filterNames}></Categories>
      <Menu items = {menuItems}></Menu>
    </section>
  </>;
}

export default App;
