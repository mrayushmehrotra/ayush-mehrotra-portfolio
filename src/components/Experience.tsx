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
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_Zyj746CAXJ5BbCdCK_1700289748124_completion_certificate.pdf",
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
    link: "https://codetikki.in",
  },
  {
    quote:
      "Created A Web Assemby (WASM) zip extractor that will be  integrated in the ai & will be provided to AI for context",
    name: "Software Engineer intern Aug",
    title: "Arakoo.ai",
    link: "https://www.loom.com/share/45b2e0306d52459aa1cfe49ef28a285e?sid=abc27ab9-0813-4777-a7e0-f8ff3f2a2472",
  },
];
