import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Example pages
const Home = () => <div className='flex flex-col justify-center items-center gap-2'>
  <img src="1.jpg" alt="Image 1" className="mb-4 w-full max-w-lg rounded-lg" />
  <img src="2.jpg" alt="Image 2" className="mb-4 w-full max-w-lg rounded-lg" />

    <section className="w-full flex items-center justify-center bg-white py-4 sm:py-8">
      <div className="w-full max-w-xl text-center px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-[32px] font-bold tracking-wide text-[#B12B5B]">
          DOWNLOAD
        </h2>
        <h3 className="text-2xl sm:text-[32px] font-normal text-black mt-1">
          OUR APP
        </h3>

        {/* Description */}
        <p className="mt-6 text-base sm:text-[20px] text-gray-500 leading-snug sm:leading-snug">
          Enjoy <span className="font-semibold">2X EDGE REWARDS</span> Points* on online
          spends with our Credit Card
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-6 items-center">
          <button className="w-full sm:w-[260px] py-3 sm:py-4 rounded-full bg-[#B12B5B] text-white text-base sm:text-[20px] font-medium hover:opacity-90 transition">
            Download App
          </button>

          <button className="w-full sm:w-[260px] py-3 sm:py-4 rounded-full bg-[#B12B5B] text-white text-base sm:text-[20px] font-medium hover:opacity-90 transition">
            Login
          </button>
        </div>
      </div>
    </section>

  <img src="3.jpg" alt="Image 3" className="mb-4 w-full max-w-lg rounded-lg" />
  <img src="4.jpg" alt="Image 4" className="mb-4 w-full max-w-lg rounded-lg" />
</div>;
const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;