import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          A series of projects that I have built using primarily Python and Java. I am currently exploring Java for big data processing and system programming. Learning how to build and deploy APIs, data architectures and frontend UI.
          </p>
          <br/>
          <p>
          Other than programming, I have extensive knowledge to scale and deploy data orchestration platforms like Apache Airflow to automate and monitor data pipelines through Statsd Exporter, Prometheus, and Grafana. I am also experienced with using messaging broker platforms like RabbitMQ and Google PubSub to publish, consume and process live messages.
          </p>
          <br/>
          <p>
          One of my areas of interest is in processing big data for quantitative analytics, I explore alot in data processing applications as well as the latest analytic models. I read a lot about personal finance and investment ideas.
          </p>
          <br/>
          <p>
            If you are unable to see the projects, please get in touch with me through my <a href="mailto:alan.leeyungchong@gmail.com" className="text-white body-font">Gmail</a>.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}