import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubscribe = () => {
    console.log('Subscribed email:', email);
    // Add your subscription logic here
  };

  const handleUploadResume = () => {
    if (resume) {
      console.log('Resume file:', resume);
      // Add your resume upload logic here
      // Example: Upload the file to a server or a cloud storage service
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText />
          Email me for jobs !!
        </h3>
        <div className='w-full space-y-4'>
          <input
            type='email'
            name='newsletterEmail'
            id='newsletterEmail'
            placeholder='name@mail.com'
            className='w-full py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type='button'
            onClick={handleSubscribe}
            id='subscribeButton'
            className='w-full py-2 px-3 border rounded bg-blue-500 text-white cursor-pointer font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaRocket />
          Get noticed faster !!
        </h3>
        <div className='w-full space-y-4'>
          <input
            type='file'
            onChange={handleResumeChange}
            id='resumeUpload'
            className='hidden'
          />
          <label htmlFor='resumeUpload' className='w-full py-2 px-3 border rounded bg-blue-500 text-white cursor-pointer font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center'>
            Choose File
          </label>
          <button
            type='button'
            onClick={handleUploadResume}
            id='uploadResumeButton'
            className='w-full py-2 px-3 border rounded bg-blue-500 text-white cursor-pointer font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Upload your Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
