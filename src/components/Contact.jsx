import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
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
        setShowPopup(true);
        form.reset();
      } else {
        alert('Oops! Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' 
      id='Contact'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact<span className='underline underline-offset-4 decoration-1 font-light'> Us</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready To Make A Move? Let's Build Your Future Together
      </p>

      <form onSubmit={handleSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='text'
              name='Name'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='email'
              name='Email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name='Message'
            placeholder='Message'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className={`bg-blue-600 text-white py-2 px-12 mb-10 rounded transition ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm sm:max-w-md'>
            <h2 className='text-lg sm:text-xl font-semibold mb-2'>Thank you for reaching out!</h2>
            <p className='mb-4 text-gray-700 text-sm sm:text-base'>
              We’ll get back to you shortly. In the meantime, feel free to explore more listings or contact us directly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
