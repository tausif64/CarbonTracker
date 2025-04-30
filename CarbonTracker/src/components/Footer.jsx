import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
    return (
      <footer id="contact" className="bg-[#2e7d32] text-white p-5 text-center">
        <div className="container mx-auto gap-2 flex justify-center flex-col md:flex-row md:justify-between items-center">
          <h3 className="text-xl">
            <Link to="/">CarbonTracker</Link>
          </h3>

          <p>
            Made with <span className='text-red-500 text-xl text-balance'>&#x2665;</span> by devX © {year}{" "}
            <Link to="/">CarbonTracker</Link>. All rights reserved.
          </p>
        </div>
      </footer>
    );
}

export default Footer