"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  Send,
  ArrowRight,
  Users,
  Coffee,
  Award,
  ChevronDown,
  BookOpen,
} from "lucide-react";

export default function Portfolio() {
  const [selectedEducation, setSelectedEducation] = useState<string | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate reCAPTCHA completion
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for FormSubmit.co
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("message", formData.message);
      submitFormData.append(
        "_subject",
        `New contact message from ${formData.name}`
      );
      submitFormData.append("_captcha", "false"); // Already have reCAPTCHA
      submitFormData.append("_template", "table");

      // Send to FormSubmit.co
      const response = await fetch(
        "https://formsubmit.co/e93ccab8b851a256b09646bfc6b7d94d",
        {
          method: "POST",
          body: submitFormData,
        }
      );

      if (response.ok) {
        alert("Message sent successfully! I will reply soon.");
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken(null);

        // Reset reCAPTCHA
        const recaptchaElement = document.querySelector(".grecaptcha-badge")
          ?.parentElement as any;
        if (recaptchaElement && recaptchaElement.reset) {
          recaptchaElement.reset();
        }
      } else {
        throw new Error("Error sending the form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const experiences = [
    {
      company: "Grupo Nexcom",
      position: "Apps Developer",
      period: "2025",
      location: "Torrejón de Ardoz, Madrid, Spain",
      type: "Internship",
      description: [
        "Web project development using various JavaScript frameworks",
        "Database and CMS installation to improve internal data management",
        "Virtual server management using Linux",
        "Development of web pages for official city events",
      ],
    },
    {
      company: "IT Italian Trattoria®",
      position: "Software Developer",
      period: "2024 - 2025",
      location: "Madrid, Spain",
      type: "Project",
      description: [
        "Mobile app development for the restaurant chain on Android",
        "CMS development with react-admin for data management",
        "Firebase project setup for real-time data and notifications",
      ],
    },
    {
      company: "Meesh | Social Network (Demo)",
      position: "Full Stack Developer",
      period: "2022 - 2023",
      location: "Quito, Ecuador",
      type: "Youth Social Network Project",
      description: [
        "Full Stack programming",
        "Team organization leader",
        "App deployment and database automation",
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "IT APP | Italian Trattoria®",
      description:
        "Complete mobile app for a restaurant chain with ordering system, push notifications, and admin panel.",
      technologies: ["Kotlin", "Firebase", "XML", "Room", "Fragmentation"],
      image: "/imagenes/i1.png",
      github: "https://github.com/Kabash87/IT-APP",
      demo: "https://info.it-backend.es/",
    },
    {
      id: 2,
      title: "Grupo Nexcom® | Business Portal",
      description:
        "Web platform for Grupo Nexcom with project, task, and internal communication management. Real-time information for visitors and clients.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Strapi CMS",
        "Ubuntu (Server)",
      ],
      image: "/imagenes/i3.png",
      github: "https://gruponexcom.com/",
      demo: "https://gruponexcom.com/",
    },
    {
      id: 3,
      title:
        "Torrestock | Platform for business opportunity fair in Torrejón de Ardoz",
      description:
        "Development of official municipal event web pages with content management system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Strapi CMS",
        "Ubuntu (Server)",
      ],
      image: "/imagenes/i4.png",
      github: "https://torrestock.com/",
      demo: "https://torrestock.com/",
    },
    {
      id: 4,
      title: "SM Pérez Abogados | Law Firm Website",
      description:
        "Professional website for a law firm with service information, contact, and blog.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Strapi",
        "SQL",
        "Next.js",
      ],
      image: "/imagenes/i5.png",
      github: "#",
      demo: "https://smperezabogadostorrejon.es/",
    },
    {
      id: 5,
      title: "NexManager | Sticker game for Android devices",
      description:
        "Sticker game for Android with collection management system and virtual store.",
      technologies: [
        "Kotlin",
        "Firebase",
        "Android Studio",
        "Room",
        "Jetpack Compose",
      ],
      image: "/imagenes/i6.png",
      github: "#",
      demo: "https://nexmanager.com/",
    },
    {
      id: 6,
      title: "WhataDuck! | Buy / Sell second-hand items",
      description:
        "Buy and sell second-hand items, but with lots of ducks. Come and explore WhataDuck! 🦆🦆",
      technologies: [
        "React JS",
        "Bootstrap",
        "MongoDB",
        "Render",
        "reCAPTHA",
        "Cloudinary",
      ],
      image: "/imagenes/i7.jpg",
      github: "https://github.com/Kabash87/front-whataduck",
      demo: "https://whataduck.onrender.com/",
    },
    {
      id: 7,
      title: "Meesh Social | Youth Social Network (Under renovation⚙️)",
      description:
        "Youth social network with real-time chat, multimedia posts, and following system.",
      technologies: ["PHP", "MySQL", "CSS3", "JavaScript"],
      image: "/imagenes/i2.png",
      github: "https://github.com/Kabash87/meesh",
      demo: "https://meesh.epizy.com/modelo/login.php",
    },
  ];

  const education = [
    {
      id: "dam",
      title: "Higher Degree in Multiplatform Application Development",
      institution: 'Salesian Training Center "Las Naves"',
      period: "2023 – 2025",
      location: "Alcalá de Henares, Spain",
      level: "Level 5 EQF-MEC",
      website: "https://salesianosalcala.com/",
      certificate: "/imagenes/e1.jpg",
    },
    {
      id: "bootcamp",
      title: "Full Stack Web Development Bootcamp",
      institution: "KeepCoding Tech School",
      period: "2022 – 2023",
      location: "Madrid, Spain",
      level: "Intensive Bootcamp",
      website: "https://keepcoding.io/",
      certificate: "/imagenes/e2.png",
    },
    {
      id: "bachillerato",
      title: "Technical Baccalaureate - ICT Technical Area",
      institution: "Salesian Institution Don Bosco",
      period: "2019 – 2022",
      location: "Quito, Ecuador",
      level: "Level 4 EQF-MEC",
      website: "https://donboscolatola.edu.ec/",
      certificate: "/imagenes/e3.jpg",
    },
  ];

  const skills = [
    "TypeScript",
    "JavaScript",
    "React JS",
    "Angular",
    "Next JS",
    "Node JS",
    "PHP",
    "Java",
    "Kotlin",
    "Jetpack Compose",
    "XML (Android)",
    "Room (Android)",
    "Python",
    "C++",
    "SQL",
    "NoSQL",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "Linux (Server)",
    "Power BI",
    "Office",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Render",
    "Vercel",
    "AI Tools",
  ];

  const languages = [
    { name: "English", level: "B2+" },
    { name: "German", level: "B1" },
    { name: "Spanish", level: "Native" },
  ];

  const stats = [
    { icon: Award, label: "Years of Experience", value: "5+" },
    { icon: Code, label: "Completed Projects", value: "22+" },
    {
      icon: BookOpen,
      label: "Frameworks & Tech Tools Mastered",
      value: "13+",
    },
    { icon: Coffee, label: "Cups of Coffee ☕☕", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Language Switcher (static, top of page) */}
      <div className="w-full flex justify-end items-center px-2 sm:px-6 md:px-8 pt-4 sm:pt-6">
        <div className="flex gap-1 sm:gap-2 items-center bg-gray-800/80 rounded-full px-2 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-gray-700 backdrop-blur-md">
          <a
            href="/es"
            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-light transition-colors duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
            tabIndex={0}
          >
            Español
          </a>
          <span className="text-gray-500 text-xs sm:text-sm">|</span>
          <a
            href="/en"
            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-light bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            tabIndex={0}
          >
            English
          </a>
          <span className="text-gray-500 text-xs sm:text-sm">|</span>
          <a
            href="/de"
            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-light transition-colors duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
            tabIndex={0}
          >
            Deutsch
          </a>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 mt-8">
            <Image
              src="/profile.jpg"
              alt="Diego Hernández"
              width={200}
              height={200}
              className="rounded-full object-cover border-4 border-gray-600 mx-auto mb-6 shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent p-2">
            Diego Hernández
          </h1>

          <p className="text-2xl md:text-2xl text-gray-300 mb-8 font-light">
            Multiplatform Apps Developer
          </p>

          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Specialized in full-stack web development with experience in React,
            Node.js, Next.js, Angular, and mobile technologies (Android). Always
            eager to learn and develop new ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://drive.google.com/file/d/1JLmA6XGItAMIrMZ9A7pJvSbMfumKUKai/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg p-6"
              >
                <Download className="w-5 h-5 mr-2 " />
                Download CV
              </Button>
            </a>
            <a href="mailto:diegohs1503@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 hover:bg-white transition-all duration-300 bg-transparent font-semibold text-lg p-6"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-6 p-4 pb-10">
            <a
              href="mailto:diegohs1503@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://kabash.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Globe className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Kabash87"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-hern%C3%A1ndez-1a6423245/"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-600/50 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-gray-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Sobre Mí */}
        <section className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About me 👽</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-300 leading-relaxed text-lg text-center">
                I have a determined personality, always presenting kindness and
                respect. I adapt easily to all environments. I invest dedication
                in completing my tasks and responsibilities, I am determined to
                achieve all my goals, and I am enthusiastic about learning
                something new every day.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Proyectos */}
        <section className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my most recent work and projects I have been
              involved in
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-gray-600 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-300">
                        {exp.company} • {exp.type}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Education and Training 🖥️
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedEducation(edu.id)}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {edu.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-300">
                        {edu.institution}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-gray-400 mt-2">
                        <ExternalLink className="w-4 h-4" />
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {edu.website}
                        </a>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-gray-700 text-gray-300"
                      >
                        {edu.level}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills y Idiomas */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Competencias Técnicas */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Technical Skills
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Idiomas */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Languages 🗣️
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30"
                    >
                      <span className="font-medium text-white">
                        {lang.name}
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-gray-700 text-gray-300"
                      >
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Formulario de Contacto */}
        <section className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact me! 😺
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Do you have a project in mind or want to get in touch? Fill out
              the form below and I will respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600 rounded-full p-3">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-400">diegohs1503@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-600 rounded-full p-3">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Phone number
                        </h3>
                        <p className="text-gray-400">(+34) 682681001</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 rounded-full p-3">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-gray-400">
                          Alcalá de Henares, Spain
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulario */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <div>
                    <ReCAPTCHA
                      sitekey="6LfmLpIrAAAAADf7FPdr-DCPZ0TJE2Kn6AT0pKPO"
                      onChange={handleRecaptchaChange}
                      theme="dark"
                      className="flex justify-center"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!recaptchaToken || isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Modal para certificaciones */}
      <Dialog
        open={!!selectedEducation}
        onOpenChange={() => setSelectedEducation(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">
              {education.find((edu) => edu.id === selectedEducation)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Image
              src={
                education.find((edu) => edu.id === selectedEducation)
                  ?.certificate || "/placeholder.svg"
              }
              alt="Certification"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg border border-gray-600"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Diego Hernández
            </h3>
            <p className="text-gray-400 mb-6">
              Multiplatform Apps Developer | Full Stack Web Developer
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:diegohs1503@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://kabash.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Kabash87"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/diego-hern%C3%A1ndez-1a6423245/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
