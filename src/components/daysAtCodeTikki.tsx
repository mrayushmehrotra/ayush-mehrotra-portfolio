"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, Code, Rocket, MessageSquare, Bell } from "lucide-react";

const DaysAtCodeTikki = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="p-6  bg-gray-900 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-white text-center">
        Internship Experience at CodeTikki
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#10b981", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #10b981" }}
          date="Jan 2023 - Mar 2023"
          iconStyle={{ background: "#10b981", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            MERN Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">CodeTikki</h4>
          <p>
            Developed and optimized web applications, ensured responsive
            designs, and collaborated in code reviews.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3b82f6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3b82f6" }}
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          icon={<Code />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Developed Employee Management Dashboard
          </h3>
          <p>
            Built a React.js dashboard to manage records for over 150+ employees
            efficiently.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f97316", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #f97316" }}
          iconStyle={{ background: "#f97316", color: "#fff" }}
          icon={<Rocket />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Optimized API Performance
          </h3>
          <p>
            Enhanced API performance by 25% using Redis caching and optimized
            React hooks.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0ea5e9", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0ea5e9" }}
          iconStyle={{ background: "#0ea5e9", color: "#fff" }}
          icon={<MessageSquare />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Integrated Facebook Chat Plugin
          </h3>
          <p>
            Implemented a Facebook chat plugin for directing customer care
            support to users.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#16a34a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #16a34a" }}
          iconStyle={{ background: "#16a34a", color: "#fff" }}
          icon={<Bell />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Implemented WhatsApp Event Notifier
          </h3>
          <p>
            Developed a WhatsApp event notifier system to enhance user
            interactions and notifications.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
};

export default DaysAtCodeTikki;
