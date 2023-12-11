import React ,{useState} from 'react';
import "./style.css"
import menu from './menuApi';
import Menucard from './Menucard';
import NAv from './NAv';
const updatedList = [...new Set(menu.map(curElem=> curElem.category)),"All"];



const Restrurant = () => {
    const[menuData , setMenuData] = useState(menu)
    const [menuList , setMenulist] = useState(updatedList)
    const FilterItem = (category) =>{
      if(category === "All"){
        setMenuData(menu)
        if(category === "All"){
          setMenuData(menu)
          return;
        }
      
      }
    const  updatedList = menu.filter((curElem)=>{
      return curElem.category == category;

    })
    setMenuData(updatedList)
    
  };
  return (
    <>
    <NAv FilterItem = {FilterItem } menuList = {menuList}/>
    <Menucard menuData = {menuData} />
    </>
  );
};

export default Restrurant;
