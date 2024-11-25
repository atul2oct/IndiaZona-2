import React from 'react'
import * as Icons from "react-icons/vsc"
import { NavLink, matchPath, useLocation } from 'react-router-dom'

const SidebarLink = ({link,iconName,name}) => {
    console.log("link ----- ",link)
    const Icon = Icons[iconName]
    

    const location = useLocation()


    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }

    if(link.name === "Settings"){return null}
  return (
    <NavLink to={link}
    // onClick={"kya kre hw"}
    className={`relative px-8 py-2 text-sm font-medium ${matchRoute(link) ? "bg-[#DEFFE8]":"bg-opacity-0"}`}>
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${matchRoute(link) ? "opacity-100":"opacity-0"}`}></span>
        <div className='flex items-center gap-x-2'>
        <Icon className="text-lg"/>
            <span>{name}</span>
        </div>
    
    </NavLink>
  )
}

export default SidebarLink