"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { experience } from "../resources/content";
import { Navbar } from "../Navbar";

export default function WorkCarouselSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden font-sans">
      {/* Static Navbar positioned absolutely on top */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar textColor="white" />
      </div>

      <Swiper
        direction="vertical"
        speed={800}
        rewind={true}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{ forceToAxis: true, sensitivity: 0.1 }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            const job = experience[index];
            const name = job.company && job.company !== "Remote" ? job.company : job.role;
            return '<div class="' + className + ' group"><span class="bullet-label absolute right-5 top-1/2 -translate-y-1/2 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 transition-opacity duration-300 whitespace-nowrap pointer-events-none">' + name + '</span></div>';
          },
          bulletClass: "swiper-pagination-bullet !bg-white/40 !w-2 !h-2 !transition-all !duration-300 !rounded-full !flex !items-center !relative",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white !scale-125",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        modules={[Mousewheel, Pagination, Navigation]}
        className="w-full h-full"
      >
        {experience.map((job, index) => {
          const displayName = job.company && job.company !== "Remote" ? job.company : job.role;
          
          let logoSrc: string | null = null;
          let bgImage: string | null = null;
          let bgStyle: React.CSSProperties = { backgroundColor: "" }; // Default dark
          
          if (displayName === "Wealthfino") {
            logoSrc = "/wealthfino.png";
            bgImage = "/wealthfino_project_bg.jpeg";
            bgStyle = { backgroundColor: "#79c577" };
          } else if (displayName === "Space AI") {
            logoSrc = "/Space_ai.png";
            bgImage = "/space_ai_bg.png";
            bgStyle = { background: "linear-gradient(135deg, #a855f7, #ec4899)" }; // purple to pink mix
          } else if (displayName === "Codetikki") {
            logoSrc = "/codetikki.png";
            bgImage = "/codetikki_bg.png";
            bgStyle = { backgroundColor: "#ee8531" }; // orange
          } else if (index === 2) {
             // Freelance Developer
             logoSrc = "/Shawtify.png";
             bgStyle = { background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }; // blue to violet mix
          } else if (index === 4) {
             // Self Employed
             logoSrc = "/InvidAI.png";
             bgStyle = { background: "linear-gradient(135deg, #14b8a6, #0ea5e9)" }; // teal to sky mix
          }

          return (
            <SwiperSlide key={index} className="relative w-full h-full">
              {/* Background */}
              {bgImage ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={bgImage}
                    alt={`${displayName} background`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full" style={bgStyle} />
              )}
              
              {/* Dark overlay to make text readable */}
              <div className={`absolute inset-0 ${bgImage ? "bg-black/75" : "bg-gradient-to-r from-black/80 via-black/30 to-black/60"}`} />

              {/* Content Container */}
              <div className="relative w-full h-full z-10">

                {/* Logo — dead center on mobile & desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {logoSrc ? (
                    <div className="relative w-36 h-36 md:w-96 md:h-96 drop-shadow-[0_0_60px_rgba(255,255,255,0.4)]">
                      <Image
                        src={logoSrc}
                        alt={`${displayName} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <h2
                      className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 font-bold text-center tracking-tight px-6"
                      style={{
                        fontSize: "clamp(2rem, 8vw, 7rem)",
                        textShadow: "0 0 60px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.15)",
                      }}
                    >
                      {displayName}
                    </h2>
                  )}
                </div>

                {/* Text Details — pinned to bottom on mobile, left-center on desktop */}
                <div className="
                  absolute bottom-0 left-0 right-0
                  px-6 pb-12 space-y-4
                  md:bottom-auto md:right-auto md:top-1/2 md:-translate-y-1/2 md:left-24 lg:left-40
                  md:px-0 md:pb-0 md:space-y-10 md:max-w-[400px]
                ">
                  {/* Role */}
                  <div>
                    <h5 className="text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-1.5 md:mb-2">Role</h5>
                    <p className="text-white text-[15px] md:text-[17px] font-medium leading-tight">
                      {job.role}
                    </p>
                  </div>

                  {/* Duration */}
                  <div>
                    <h5 className="text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-1.5 md:mb-2">Duration</h5>
                    <p className="text-white text-[14px] md:text-[15px] font-medium">
                      {job.period}
                    </p>
                  </div>

                  {/* Tools */}
                  {job.technologies && job.technologies.length > 0 && (
                    <div>
                      <h5 className="text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-1.5 md:mb-2">Tools</h5>
                      <p className="text-white text-[13px] md:text-[15px] font-medium leading-relaxed">
                        {job.technologies.join(", ")}
                      </p>
                    </div>
                  )}

                  {/* Description — hidden on mobile to keep layout clean */}
                  {job.description && (
                    <div className="hidden md:block">
                      <h5 className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Description</h5>
                      <p className="text-white/80 text-[14px] leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Arrows */}

      {/* Global CSS overrides for Swiper Pagination to place it on the right correctly */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-pagination-vertical {
          right: 12px !important;
        }
        @media (min-width: 768px) {
          .swiper-pagination-vertical {
            right: 30px !important;
          }
        }
        .swiper-pagination-bullet {
          margin: 16px 0 !important;
        }
        .swiper-pagination-bullet-active .bullet-label {
          opacity: 1 !important;
        }
        .swiper-pagination-bullet:hover .bullet-label {
          opacity: 1 !important;
        }
      `}} />
    </section>
  );
}
