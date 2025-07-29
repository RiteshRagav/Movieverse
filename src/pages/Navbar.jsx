import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'
const Navbar = () => {
  const {watchlist} = useContext(WatchListContext);
  return (
    <nav className='bg-black/55 p-4 text-white flex justify-between items-center fixed w-full top-0 z-10' >
<Link to="/" className='text-2xl font-bold'>Movie App</Link>
<Link to="/watchlist" className='text-xl'>Watchlist({watchlist.length})</Link>
    </nav>
  )
}

export default Navbar