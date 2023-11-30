import React  from 'react';
import "./style.css"
import menu from './menuApi';
import Menucard from './Menucard';


const Restrurant = () => {
    const[menuData , setMenuData] = React.useState(menu)
    const FilterItem = (category) =>{
    const  updatedList = menu.filter((curElem)=>{
      return curElem.category == category;

    })
    setMenuData(updatedList)
  };
  return (
    <>
    <nav className = "navbar">
          <div className='btn-group'>
            <button className='btn-group__item' onClick = {() => FilterItem("breakfast")} >Breakfast </button>
            <button className='btn-group__item' onClick = {() => FilterItem("lunch")}>Lunch</button>
            <button className='btn-group__item' onClick = {() => FilterItem("evening")}>Evening</button>
            <button className='btn-group__item' onClick = {() => FilterItem("dinner")}>Dinner</button>
            <button className='btn-group__item' onClick = {() => setMenuData(menu)}> All</button>

          </div>

        </nav>
    <Menucard menuData = {menuData} />
    </>
  );
};

export default Restrurant;
