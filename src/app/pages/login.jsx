import React from 'react';

const Login = () => {
  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        {/* Video Section */}
        <div className="w-1/2 shadow-2xl">
          <video className="object-cover w-full h-screen hidden md:block" autoPlay loop muted>
            <source
              src="https://videos.pexels.com/video-files/5548078/5548078-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="../html/index.html"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
                {/* Guppy Body */}
                <ellipse cx="50" cy="50" rx="30" ry="15" fill="orange" />
                {/* Dorsal Fin */}
                <path d="M 20 40 Q 50 20, 80 40" fill="darkorange" />
                {/* Caudal Fin */}
                <path d="M 80 50 Q 90 30, 100 50 Q 90 70, 80 50" fill="orange" />
                {/* Eye */}
                <circle cx="35" cy="45" r="2" fill="black" />
                {/* Pectoral Fins */}
                <path d="M 30 50 Q 25 45, 30 40" fill="darkorange" />
                <path d="M 70 50 Q 75 45, 70 40" fill="darkorange" />
              </svg>
              Darky's
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{' '}
                <a href="../html/regis.html" className="underline font-semibold">
                  Register here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
