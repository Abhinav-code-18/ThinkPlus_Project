import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({to, children})=>{
  const loc = useLocation();
  const active = loc.pathname === to;
  return <Link to={to} className={`px-3 py-2 rounded ${active ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>{children}</Link>
}

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center font-bold">TP</div>
          <div>
            <h1 className="text-lg font-semibold">ThinkPlus</h1>
            <p className="text-xs text-slate-500">Learn. Practice. Succeed.</p>
          </div>
        </div>
        <nav className="flex items-center gap-2 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}