
import logo from './assets/IRist.png';
import {HomeIcon, UserIcon, UserCircleIcon, ArrowLeftOnRectangleIcon, Cog6ToothIcon} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="bg-oxford-blue 
    text-white 
    text-xl 
    h-screen 
    w-1/6 p-4
    sticky top-0">
      <NavLink to="/" end>
        <img src={logo} alt="IRist.png" className='p-4 cursor-pointer'/>
      </NavLink>
      
      <ul className="my-3">
          <NavLink to="/" >
            {({ isActive }) => (
              <li className={[
                "pl-3 py-4 mb-4 hover:bg-cerulean text-white rounded-md duration-300", 
                isActive || window.location.pathname === '/' ? 
                'active bg-cerulean text-white rounded-md' : ''].join(" ")}>
                <HomeIcon className='h-6 absolute' />
                <p className='pl-8'>Dashboard</p>
              </li>
            )}
          </NavLink>
        
          <NavLink to="/UserList" >
            {({ isActive }) => (
              <li className={[
                "pl-3 py-4 mb-4 hover:bg-cerulean text-white rounded-md duration-300", 
                isActive ? 
                'active bg-cerulean text-white rounded-md' : ''].join(" ")}>
                <UserIcon className='h-6 absolute' />
                <p className='pl-8'>User List</p>
              </li>
            )}
          </NavLink>
        
          <NavLink to="/profile" >
            {({ isActive }) => (
              <li className={["pl-3 py-4 mb-4 hover:bg-cerulean text-white rounded-md duration-300", 
              isActive ? 
              'active bg-cerulean text-white rounded-md' : ''].join(" ")}>
                <UserCircleIcon className='h-6 absolute' />
                <p className='pl-8'>Profile</p>
              </li>
            )}
          </NavLink>

          <NavLink to="/logout" >
            {({ isActive }) => (
              <li className={["pl-3 py-4 mb-4 hover:bg-cerulean text-white rounded-md duration-300", 
              isActive ? 
              'active bg-cerulean text-white rounded-md' : ''].join(" ")}>
                <ArrowLeftOnRectangleIcon className='h-6 absolute' />
                <p className='pl-8'>Logout</p>
              </li>
            )}
          </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
