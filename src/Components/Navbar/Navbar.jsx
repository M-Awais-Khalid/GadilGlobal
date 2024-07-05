import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DemoBtn from '../DemoBtn/DemoBtn'
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('backdrop-blur-md', 'bg-opacity-90');
      } else {
        header.classList.remove('backdrop-blur-md', 'bg-opacity-90');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky bg-transparent top-0 left-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b border-gray-200 text-sm sm:py-0">
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-none text-xl font-semibold" aria-label="Brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" fill="none" viewBox="0 0 176 40">
              <path fill="#283841" fillRule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clipRule="evenodd"></path>
              <path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
            </svg>
          </Link>
          <div className="md:hidden py-2.5">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg className="hs-collapse-open:hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className="hs-collapse-open:block flex-shrink-0 hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
            <a className="py-3 ps-px sm:px-3 font-medium text-blue-600" href="#" aria-current="page">
              Products
            </a>
            <a className="py-3 ps-px sm:px-3 font-medium text-gray-500 hover:text-gray-400" href="#">
              Resources
            </a>
            <Link to="/Company" className="py-3 ps-px sm:px-3 font-medium text-gray-500 hover:text-gray-400" >
              Company
            </Link>
            <Link to="/ContactUs"className="py-3 ps-px sm:px-3 font-medium text-gray-500 hover:text-gray-400" >
              Contact Us
            </Link>
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3">
            <DemoBtn/>
            </div>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;