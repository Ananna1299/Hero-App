import React from 'react';
import GithubImg from "../assets/github.png"
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar px-8 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/' > Home</NavLink></li>
        <li>
          <NavLink to='/App' >Apps</NavLink>
          
        </li>
        <li>
             <NavLink to='/installation' >Installation</NavLink>
        </li>
      </ul>
    </div>
    <Link to='/' className='flex items-center '>
    <img className='h-6 mr-2' src={logo} alt="" />
    <span className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>HERO.IO</span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/' >Home</NavLink></li>
        <li>
          <NavLink to='/app'>Apps</NavLink>
          
        </li>
        <li>
             <NavLink to='/installation' >Installation</NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://github.com/Ananna1299?tab=repositories"   
      target="_blank" className="btn bg-linear-to-r from-purple-500 to-indigo-500 py-3">
        <img className='mr-2' src={GithubImg} alt="" />
        <span className='text-white font-semibold'>Contribute</span></a>
  </div>
</div>
    );
};

export default Navbar;