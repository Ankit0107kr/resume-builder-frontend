import React from 'react';
import { Disclosure} from '@headlessui/react';
// import {Disclosure} from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../images/logo.png'; // Adjust the path according to your project structure
import { Link, useLocation } from 'react-router-dom';
// import { UserButton } from '@clerk/clerk-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Check ATS', href: '/score' },
  { name: 'About Us', href: '/about' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-4 max-w-7x1 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Your Company"
                  src={logo} // Use the imported image here
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                    className={classNames(
                      location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <Link to="/login">
          <div className="text-blue-500">Login</div>

          </Link> */}

          {/* <UserButton/> */}
          
        </div>
      </div>
      

      
    </Disclosure>
  );
}
