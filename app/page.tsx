"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  FileText,
  Code,
  Palette,
  Smartphone,
  Globe,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import Loading from "@/components/loading"
import ParticleBackground from "@/components/particle-background"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500">
              Hi, I'm Muhammad Wildan Kamil
            </span>
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Informatics Engineering Student & Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating innovative mobile applications and leading impactful projects. Currently
              pursuing my degree at Universitas Padjadjaran with a focus on website development and UI/UX design.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-green-500 text-white hover:bg-green-500 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-orange-500">
                About Me
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-green-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=300&text=Muhammad+Wildan+Kamil"
                      alt="Profile"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a dedicated Informatics Engineering student at Universitas Padjadjaran with a passion for Android
                  development and leadership. With experience in front-end development, UI/UX design, and project
                  management, I've successfully delivered multiple projects including nationally funded research and
                  commercial applications.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Beyond coding, I'm actively involved in campus leadership roles, currently serving as Chairman of KMMK
                  Unpad, overseeing 130+ members across 17 faculties. I believe in combining technical excellence with
                  meaningful social impact through education and community service.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">10+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">3.71</div>
                    <div className="text-gray-400">Current GPA</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500">
                Skills & Technologies
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCategory
                title="Mobile Development"
                icon={<Smartphone className="w-8 h-8" />}
                skills={["Android Development", "Kotlin", "UI/UX Design", "Google Play Store", "API Integration"]}
              />
              <SkillCategory
                title="Web Development"
                icon={<Code className="w-8 h-8" />}
                skills={["JavaScript", "HTML/CSS", "Front-End Development", "Responsive Design", "Web APIs"]}
              />
              <SkillCategory
                title="Leadership & Management"
                icon={<Globe className="w-8 h-8" />}
                skills={[
                  "Project Management",
                  "Team Leadership",
                  "Public Speaking",
                  "Event Planning",
                  "Strategic Planning",
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500">
                What I Do
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-green-500" />}
                title="Android Development"
                description="Native Android applications using Kotlin with clean architecture, modern UI components, and seamless user experiences."
              />
              <ServiceCard
                icon={<Code className="w-10 h-10 text-yellow-500" />}
                title="Front-End Development"
                description="Responsive web applications with modern JavaScript frameworks, ensuring cross-browser compatibility and optimal performance."
              />
              <ServiceCard
                icon={<Palette className="w-10 h-10 text-green-500" />}
                title="UI/UX Design"
                description="User-centered design solutions that combine aesthetics with functionality, creating engaging and accessible interfaces."
              />
              <ServiceCard
                icon={<Globe className="w-10 h-10 text-yellow-500" />}
                title="Project Management"
                description="End-to-end project leadership using Agile methodologies, from concept to deployment with stakeholder coordination."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-green-500" />}
                title="Technical Training"
                description="Educational workshops and training sessions on programming, digital literacy, and technology adoption."
              />
              <ServiceCard
                icon={<Calendar className="w-10 h-10 text-yellow-500" />}
                title="Leadership Consulting"
                description="Strategic guidance on organizational leadership, team management, and community engagement initiatives."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500">
                Featured Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Arabic Learning App (Ngalodern)"
                description="Android application for interactive Arabic language learning using gamified methods. Nationally funded by Kemendikbudristek and published on Google Play Store."
                image="/placeholder.svg?height=200&width=300&text=Arabic+Learning"
                tags={["Android", "Kotlin", "UI/UX", "Google Play", "Education"]}
                liveUrl="https://play.google.com/store"
                githubUrl="#"
              />
              <ProjectCard
                title="Coconut Disease Detector (CODeT.id)"
                description="AI-powered Android app for detecting coconut tree diseases. Developed as part of Bangkit Academy 2024 capstone project with ML integration."
                image="/placeholder.svg?height=200&width=300&text=CODeT"
                tags={["Android", "Machine Learning", "Kotlin", "API Integration"]}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Trakmarindo Company Profile"
                description="Modern, responsive company profile website for a national heavy machinery provider, improving their digital presence and client outreach."
                image="/placeholder.svg?height=200&width=300&text=Trakmarindo"
                tags={["Web Development", "Responsive Design", "JavaScript"]}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Faunaria AR App"
                description="AR-based educational Android application teaching about Indonesia's endangered species. Focused on UI/UX design and user experience optimization."
                image="/placeholder.svg?height=200&width=300&text=Faunaria"
                tags={["UI/UX Design", "AR", "Educational", "Prototyping"]}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="EduSiap! Learning Platform"
                description="Educational web platform for preschool children to facilitate early learning readiness. Led cross-functional team as Team Lead."
                image="/placeholder.svg?height=200&width=300&text=EduSiap"
                tags={["Web Development", "Team Leadership", "Education"]}
                liveUrl="#"
                githubUrl="#"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500">
                Let's Work Together
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <p className="text-gray-300 mb-8">
                    I'm always interested in new opportunities and exciting projects. Whether you have a question or
                    just want to say hi, feel free to reach out!
                  </p>
                  <div className="space-y-4">
                    <ContactInfo icon={<Mail />} label="Email" value="mwildankamil@gmail.com" />
                    <ContactInfo icon={<Calendar />} label="Phone" value="+62 851-5926-6812" />
                    <ContactInfo icon={<Linkedin />} label="LinkedIn" value="muhammad-wildan-kamil" />
                  </div>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 Muhammad Wildan Kamil. All rights reserved.</p>
              <p className="text-green-400 text-sm mt-1">mwildankamil@gmail.com</p>
            </div>
            <div className="flex space-x-6">
              <SocialLink icon={<Github />} href="#" label="GitHub" />
              <SocialLink
                icon={<Linkedin />}
                href="https://www.linkedin.com/in/muhammad-wildan-kamil/"
                label="LinkedIn"
              />
              <SocialLink icon={<Twitter />} href="#" label="Twitter" />
              <SocialLink icon={<Mail />} href="mailto:mwildankamil@gmail.com" label="Email" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCategory({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800"
    >
      <div className="flex justify-center mb-4 text-green-500">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="text-gray-300">
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-green-500 transition-all duration-300"
    >
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gradient-to-r from-green-500/20 to-yellow-500/20 text-green-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={liveUrl} className="flex items-center text-green-400 hover:text-green-300 transition-colors">
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
          <a href={githubUrl} className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-green-500">{icon}</div>
      <div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-white">{value}</div>
      </div>
    </div>
  )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-500 transition-all duration-300"
    >
      {icon}
    </a>
  )
}
