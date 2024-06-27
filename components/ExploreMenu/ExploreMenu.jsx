import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-men' id='explore-menu'>
      <h1>Explore menu</h1>
      <p className='explore-menu-text'> choose from a diverse menu featuring array</p>
      <div className="explore-menu">
        {menu_list.map((item,index)=>{
            return( 
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}          className='explore-menu-list-item' key={index}>
         <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
         <p>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr />
      

    </div>
  )
}

export default ExploreMenu
