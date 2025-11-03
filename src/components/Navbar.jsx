import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Leaf, Home, User, Briefcase, TrendingUp, ShieldCheck, BookOpen, Bot } from 'lucide-react';

const tabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/jobs', label: 'Jobs & Hub', icon: Briefcase },
  { to: '/trade', label: 'Trade Center', icon: TrendingUp },
  { to: '/verify', label: 'Verification', icon: ShieldCheck },
  { to: '/edu', label: 'EduCentre', icon: BookOpen },
  { to: '/bot', label: 'Yukti Bot', icon: Bot },
  { to: '/profile', label: 'Profile', icon: User },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#43A047] to-[#1976D2] grid place-items-center shadow-md">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">Yukti</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {tabs.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition 
                  ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile tabs */}
      <div className="md:hidden border-t border-white/10">
        <div className="grid grid-cols-4">
          {tabs.slice(0, 4).map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 text-xs ${isActive ? 'text-white' : 'text-white/70'}`
              }
            >
              <Icon className="h-4 w-4 mb-1" />
              {label}
            </NavLink>
          ))}
        </div>
        <div className="grid grid-cols-3 border-t border-white/10">
          {tabs.slice(4).map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 text-xs ${isActive ? 'text-white' : 'text-white/70'}`
              }
            >
              <Icon className="h-4 w-4 mb-1" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
