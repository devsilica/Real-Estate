import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwpqrwnj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubscribed(true);
        form.reset();
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        {/* Column 1: Estate Info */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="SilStack Logo" />
          <p className='text-gray-400 mt-4'>
            Building Dreams, Shaping Skylines. With over 10 years of excellence in real estate, we've delivered 20M+ sq. ft. across 12+ landmark projects and 25+ ongoing ventures. Trusted for innovation, quality, and integrity—turning property dreams into reality, one space at a time.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our Newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>
            The latest news, articles, and resources—sent to your inbox.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-2'>
              <input
                type="email"
                name="Email"
                placeholder='Enter Your Email'
                required
                className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full'
              />
              <button
                type="submit"
                disabled={loading}
                className={`py-2 px-4 rounded bg-blue-500 text-white transition w-full sm:w-auto ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <p className='text-green-400'>Thanks for subscribing!</p>
          )}
        </div>
      </div>

      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 © SilStack. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
