import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl text-green-400 font-bold mb-4">Contact</h1>
      <p className="text-lg mb-2">Ready to get started on your Company?</p>
      <p className="mb-6">Contact me anytime.</p>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-30">
        <a
          href="mailto:towhidofficial692@gmail.com"
          className="bg-green-600 py-2 px-6 rounded text-center"
        >
          towhidofficial692@gmail.com
        </a>

        <a
          href="tel:+8801521733203"
          className="bg-green-600 py-2 px-6 rounded text-center"
        >
          (+880) 1521733203
        </a>
      </div>
    </div>
  );
};

export default Contact;
