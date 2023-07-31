// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Meet Alan
            <br className="hidden lg:inline-block" />
          </h1>
          <h3>A skilled professional in quantitative development and big data analytics with a remarkable track record. Having achieved a triumphant win in an Israeli hackathon, Alan showcased unmatched expertise in implementing multi-classification machine learning algorithms. As a certified Google Professional Data Engineer, he has specialized in Python and Java, crafting cutting-edge solutions. Currently pursuing AWS DevOps Professional Engineer certification, Alan is well-equipped to revolutionize your big data analytics endeavors. With an adaptive and collaborative mindset, he is poised to unleash the full potential of your company's data, driving innovation and paving the way for unparalleled achievements.</h3>
          <br/>
          <p className="mb-8 leading-relaxed">
            
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:w-64 lg:h-64 md:w-48 md:h-48 w-40 h-40 rounded-full overflow-hidden">
          <img
            className="object-cover object-center w-full h-full"
            alt="hero"
            src="./profile.jpg"
          />
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile.jpg"
          />
        </div> */}
      </div>
    </section>
  );
}