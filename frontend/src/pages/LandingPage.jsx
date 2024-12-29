import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image to trigger lazy loading optimization.
    const img = new Image();
    img.src =
      'https://media.licdn.com/dms/image/v2/D4D12AQEkKOv4ghlHdg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1667995460210?e=2147483647&v=beta&t=Z8jqnXKxzNzB6es2lppeOQzoU0_jSEGJn77L3DnZ_tY';
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-green-100 p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 opacity-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 opacity-50 rounded-full blur-3xl -z-10"></div>

      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 drop-shadow-lg mb-2">
          Welcome to <span className="text-indigo-600 animate-pulse">PROGRESSPATH</span>
        </h1>
        <p className="text-md sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto">
          Empowering learners and educators with seamless online education tools for a brighter future.
        </p>
      </div>

      {/* Login Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
        <button
          onClick={() => navigate('/login?role=student')}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          👩‍🎓 Login as Student
        </button>
        <button
          onClick={() => navigate('/login?role=teacher')}
          className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          👨‍🏫 Login as Teacher
        </button>
      </div>

      

      {/* Decorative Illustration with Lazy Loading */}
      <div className="mt-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        {!isImageLoaded ? (
          // Skeleton loader while the image is loading
          <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 animate-pulse rounded-lg shadow-lg"></div>
        ) : (
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQEkKOv4ghlHdg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1667995460210?e=2147483647&v=beta&t=Z8jqnXKxzNzB6es2lppeOQzoU0_jSEGJn77L3DnZ_tY"
            alt="LMS Illustration"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
