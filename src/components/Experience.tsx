"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Experience() {
  return (
    <>
      <br />
      <br />
      <br />

      <div className="h-[40rem] scale-110  rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className="text-3xl font-[neuka] p-3">Certifications(3)</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
        <br />
        <h1 className="text-3xl font-[neuka] p-3">Work Experience(2)</h1>
        <InfiniteMovingCards items={WorkExp} direction="left" speed="normal" />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Lyft Back-End Engineering Virtual Experience Program held by Forage A program that consists of 4 chapter namely software architecture refactoring unit-testing and test driven-development",
    name: "Lyft Back-End Engineering Job Simulation.",
    title: "Lyft",
  },
  {
    quote:
      "Angela Yu's full stack web development bootcamp, where i learned HTML,CSS,JS, Bootstrap, Git, Reactjs, Nodejs, SQL, NoSQL  basics of web development",
    name: "Angela Yu ",
    title: "The Complete Full-Stack Web Development Bootcamp ",
  },
  {
    quote:
      "Introduction to Docker, learn basics of microservices, monolithic & monorepo architecture ",
    name: "Introduction to docker",
    title: "Coursera",
  },
];

const WorkExp = [
  {
    quote:
      "Developed a React.js dashboard to manage records for over 150+ employees. Enhanced API performance by 25% via Redis caching and optimized React hooks. Integrated a Facebook chat plugin for directing customer care support for users. Implemented a WhatsApp event notifier system for user interactions.",
    name: "Full Stack Mern Developer",
    title: "Codetikki",
  },
  {
    quote:
      "Created A Web Assemby (WASM) zip extractor that will be used to extract data which will be provided to AI",
    name: "Software Engineer intern Aug  ",
    title: "Codetikki",
  },
];
