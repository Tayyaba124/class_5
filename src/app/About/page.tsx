
"use client";  // Add this at the top

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const About = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className='bg-emerald-100 min-h-screen'>
      <div className="bg-slate-800 h-20 text-center text-3xl font-bold mb-4 p-10">
        <h1 className='text-amber-50'>Welcome to My Portfolio</h1>
      </div>
      

      {/* Flexbox for layout */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-emerald-100 mt-2">

        {/* Left side: Profile and Content */}
        <div className="md:w-1/2 w-full bg-slate-500 rounded-lg shadow-md p-6">
          {/* Profile Section */}
          <section>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">👋 Hello!</h1>
            <p className="text-lg mb-6">
              I'm <span className="font-semibold">Tayyaba Shoukat</span>, a web developer passionate about building impactful digital experiences through innovative technologies. 🚀
            </p>
            <div className="flex flex-wrap items-center mb-6">
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#WebDeveloper</span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#NextJS</span>
              <span className="inline-block bg-yellow-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#TypeScript</span>
              <span className="inline-block bg-pink-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#HTML</span>
              <span className="inline-block bg-purple-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#CSS</span>
              <span className="inline-block bg-indigo-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#TechLearner</span>
              <span className="inline-block bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#OpenToOpportunities</span>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">🌐 Skills & Expertise</h2>
            <p className="text-md mb-4">
              I’m honing my skills in <span className="font-medium">Next.js, JavaScript, and TypeScript</span> while already proficient in <span className="font-medium">HTML, CSS, and Office Automation</span>. I focus on building modern, responsive web applications that deliver excellent user experiences.
            </p>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">💻 My Projects</h2>
            <p className="text-md mb-4">
              I’ve worked on several projects, and I’m eager to tackle more complex challenges in the future. My expertise lies in utilizing Next.js and front-end technologies to write clean and efficient code.
            </p>
          </section>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 w-full mt-3 md:mt-0 md:ml-6 flex justify-center items-center">
          <img
            src="/Capture.PNG"
            alt="Tayyaba Shoukat's Profile"
            className="object-cover rounded-lg shadow-lg w-full h-auto md:h-96"
          />
        </div>

      </div>
      {/* Likes Section */}
      <div className="text-center mt-6 ">
        <p className="text-lg mb-4">Likes: {likes}</p>
        <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-32" onClick={() => setLikes(likes+1)}>
  Like
</Button>


      </div>

      
    </div>
  );
}

export default About;
