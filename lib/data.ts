import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import elearnImg from "@/public/elearn.png";
import elearningImg from "@/public/elearning.png";
import zofadImg from "@/public/zofad.png";
import zofad2Img from "@/public/zofad2.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: " BCA Graduated",
    location: "Mathura, UP, India",
    description:
      "I graduated after 3 Years of studying. I immediately found a job as a Full-Stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked on Unified Mentor Private Limited as a front-end developer for 2 Months in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "March-2024 - April-2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Learning Platform",
    description:
      "'Sigma Edify', I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: elearnImg,
  },
  {
    title: "Sigma Edify",
    description:
      "'sigmaedify.com', Welcome to E-Learn Hub, your ultimate destination for online education and skill enhancement. career, learn a new hobby.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: elearningImg,
  },
  {
    title: "E-Commerce",
    description:
      "'Zofad', I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: zofadImg,
  },
  {
    title: "Zofad Furniture",
    description:
      "'zofad.in', Zofad is a premier online furniture retailer committed to providing stylish, high-quality home furnishings at competitive prices.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: zofad2Img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
