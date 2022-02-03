import React from "react";
import {  UsersIcon } from "@heroicons/react/solid";
import { backgrounds } from "../data";
import { Chrono } from "react-chrono";

export default function Background() {
  return (
    <section id="background">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-education mb-12">
          Timeline About Me
        </h1>
        <div className="flex flex-wrap m-4" style = {{width:"950", height:"950px"}}>
          <Chrono items = {backgrounds} mode="VERTICAL_ALTERNATING"/>
          {/* {backgrounds.map((background) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-large text-black">
                      {background.role}
                    </span>
                    <span className="title-font font-medium text-white">
                      {background.year}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {background.company}
                    </span>
                  </span>
                </div>
                <br/>
                <p className="leading-relaxed mb-6">{background.note}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}