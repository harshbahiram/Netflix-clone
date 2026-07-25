import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="bg-black text-white px-38 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">

          <Link to="/faq" className='underline'>FAQ</Link>  
          <a href='#' className='underline'>Investor Relations</a>
          <a href='#' className='underline'>Privacy</a>
          <a href='#' className='underline'>Speed Test</a>
          <a href='#' className='underline'>Help Center</a>         
          <a href='#' className='underline'>Jobs</a>         
          <a href='#' className='underline'>Cookie Preference</a>      
          <a href='#' className='underline'>Legal Notices</a>         
          <a href='#' className='underline'>Account</a>         
          <a href='#' className='underline'>Ways to Watch</a>         
          <a href='#' className='underline'>Corporate Information</a>         
          <a href='#' className='underline'>Only on Netflix</a>         
          <a href='#' className='underline'>Media Centre</a>         
          <a href='#' className='underline'>Terms of Use</a>
          <a href='#' className='underline'>Contact Us</a>
          
        </div>

        <p className='mt-8'>
          Netflix India
        </p>

        <p className='mt-1 text-gray-600'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>

      </footer>
  );
}
export default Footer