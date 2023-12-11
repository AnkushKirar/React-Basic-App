import React from 'react';


const NAv = ({ FilterItem, menuList }) => {
    console.log(menuList)
  return (
    <div>
      <nav className="navbar">
        <div className='btn-group'>
          {menuList.map((c, ) => {
            return (
              <button className='btn-group__item' onClick={() => FilterItem(c)}>
                {c}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NAv;
