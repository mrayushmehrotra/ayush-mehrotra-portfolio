"use client";

import { AnimateIn } from "lib/animation/Animation";
import { ExternalLink, GraduationCap, Award } from "lucide-react";
import { track } from "@vercel/analytics/react";
import Link from "next/link";

interface CertificationItem {
    title: string;
    issuer: string;
    date: string;
    description?: string;
    link?: string;
}

interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

const certifications: CertificationItem[] = [
    {
        title: "Deloitte Data Analytics",
        issuer: "Forage",
        date: "2025",
        description: "Completed a simulation covering data analysis, visualization, and presenting insights to stakeholders.",
        link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Zyj746CAXJ5BbCdCK_1760543538830_completion_certificate.pdf",
    },
    {
        title: "Lyft Backend Engineering",
        issuer: "Forage",
        date: "2025",
        description: "Built a Python Flask backend, designed system architecture, and worked with data structures for a ride-sharing platform.",
        link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Zyj746CAXJ5BbCdCK_1760543538830_completion_certificate.pdf",
    },
    {
        title: "Full Stack Web Development",
        issuer: "Angela Yu (Udemy)",
        date: "2025",
        description: "Covered HTML, CSS, JavaScript, React, Node.js, MongoDB, and Git through hands-on projects.",
        link: "#",
    },
];

const education: EducationItem[] = [
    {
        degree: "Bachelor of Science",
        institution: "Maa Shakuntala PG college",
        period: "2020 - 2024",
        description: "Focused on software engineering, data structures, and web development.",
    },
];

export default function Certification() {
    const hasValidLink = (link?: string) => link && link !== "#";

    return (
        <div className="mt-8">
            {/* Education Section */}
            <AnimateIn variant="fadeLeft" delay={0.1}>
                <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                </h2>
            </AnimateIn>
            <div className="relative mb-12">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent ml-2 hidden sm:block" />

                <div className="space-y-4">
                    {education.map((item, index) => {
                        const delay = 0.1 + index * 0.1;
                        return (
                            <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                                <Link href='https://mscollege.org.in/' target="_blank" rel="noopener noreferrer">
                                    <div className="group p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] hover:shadow-[0_0_30px_rgba(55,65,81,0.18)] hover:translate-x-1 transition-all duration-300 ease-out sm:ml-6 relative">
                                        {/* Timeline dot */}
                                        <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-white border-2 border-zinc-300 hidden sm:block group-hover:border-zinc-500 transition-colors" />

                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-1">
                                            <h3 className="text-lg font-semibold text-zinc-900">{item.degree}</h3>
                                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 whitespace-nowrap">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-zinc-600 mb-1">{item.institution}</p>
                                        {item.description && (
                                            <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                                        )}
                                    </div>
                                </Link>
                            </AnimateIn>
                        );
                    })}
                </div>
            </div>

            {/* Certifications Section */}
            <AnimateIn variant="fadeLeft" delay={0.2}>
                <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certifications
                </h2>
            </AnimateIn>
            <div className="space-y-4">
                {certifications.map((cert, index) => {
                    const delay = 0.2 + index * 0.1;

                    return (
                        <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                            <div className="group p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] hover:shadow-[0_0_30px_rgba(55,65,81,0.18)] hover:translate-x-1 transition-all duration-300 ease-out">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-zinc-900">{cert.title}</h3>
                                    {hasValidLink(cert.link) && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-xs font-medium text-zinc-700 hover:text-zinc-900 transition-colors px-2 py-1 rounded-md hover:bg-zinc-100"
                                            onClick={() => track(`${cert.title}_cert_clicked`)}
                                        >
                                            View <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                                    <p className="text-sm font-medium text-zinc-600">{cert.issuer}</p>
                                    <span className="hidden sm:inline text-zinc-300">•</span>
                                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 w-fit">
                                        {cert.date}
                                    </span>
                                </div>
                                {cert.description && (
                                    <p className="text-sm text-zinc-500 leading-relaxed">{cert.description}</p>
                                )}
                            </div>
                        </AnimateIn>
                    );
                })}
            </div>
        </div>
    );
}