import React from 'react'
import { Link } from 'react-router-dom';

const DemoBtn = () => {
  return (
    <div className=''><Link to="/demoRequest" className="no-underline inline-block w-auto text-center min-w-[200px] px-4 py-3 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px"
    href="#">
    Request Demo
</Link></div>
  )
}

export default DemoBtn