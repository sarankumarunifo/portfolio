import './navbarStyle.css'

import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  
  const[open , setOpen]=React.useState(false);


  const menuOpen =()=>{
    setOpen(!open)
  }




  return (
    <div className='header'>
    <Link to="/"> <h1>Portfolio.</h1></Link>
     <ul className='nav-menu'>
         <li><Link to="/"> <h1>Home</h1></Link></li>
         <li><Link to="/about"> <h1>About</h1></Link></li>
         <li><Link to="/project"> <h1>Project</h1></Link></li>
         <li><Link to="/contact"> <h1>Contact</h1></Link></li>
     </ul>
     <div className='menu-icon'>
        <MenuIcon size={20} style={{color:'white'}}  onClick={menuOpen}/>

     </div>
    </div>
  )
}

export default Navbar;