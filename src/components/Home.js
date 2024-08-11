import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/Home.css';

function Home() {
  return (
    <div className="max-w-5xl mx-auto p-5 font-sans text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to Career-Canvas</h1>
      </header>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-10 md:mb-0 md:mr-10 flex-1 md:pr-5">
          <h2 className="text-3xl font-semibold text-blue-800 mb-3">Create a Professional Resume in Minutes</h2>
          <p className="text-lg mb-2">
            Our platform helps you create a professional resume effortlessly. Customize your
            resume with our easy-to-use tools and templates.
          </p>
          <p className="text-lg mb-4">
            Check your ATS score and analyze your resume with our inbuilt Gemini AI tool to ensure
            it meets industry standards.
          </p>
          <Link to="/dashboard">
          <button class="c-button">
  <span class="c-main">
    <span class="c-ico"><span class="c-blur"></span> <span class="ico-text">+</span></span>
    Get Started
  </span>
</button>
          </Link>
        </div>
        <div className="flex-1 max-w-lg md:pl-5">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src="https://img.freepik.com/free-vector/resume-folder-concept-illustration_114360-357.jpg?size=626&ext=jpg" alt="Resume Example 1" />
              <p className="legend bg-gray-800 bg-opacity-50 text-white p-2">Professional Template</p>
            </div>
            <div>
              <img src="https://img.freepik.com/free-vector/resume-writing-service-abstract-concept_335657-3098.jpg?size=626&ext=jpg" alt="Resume Example 2" />
              <p className="legend bg-gray-800 bg-opacity-50 text-white p-2">Creative Template</p>
            </div>
            <div>
              <img src="https://img.freepik.com/free-vector/business-people-writing-agreement-shaking-hands-tiny-man-with-magnifying-glass-researching-checklist-document-clipboard-paper-flat-vector-illustration-survey-paperwork-management-concept_74855-21676.jpg?size=626&ext=jpg" alt="Resume Example 3" />
              <p className="legend bg-gray-800 bg-opacity-50 text-white p-2">Modern Template</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
