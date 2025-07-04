import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          message: fromZodError(result.error).toString()
        });
      }
      
      const contact = await storage.createContact(result.data);
      res.json({ message: "Contact message sent successfully", contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", async (req, res) => {
    try {
      // Create a simple resume content based on the experience data
      const resumeContent = createResumeContent();
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Haris_Shah_Resume.pdf"');
      res.send(resumeContent);
    } catch (error) {
      console.error("Error generating resume:", error);
      res.status(500).json({ message: "Failed to generate resume" });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function createResumeContent(): string {
  // For now, return a simple text-based resume
  // In a real application, you'd generate a proper PDF
  return `
SYED MUHAMMAD HARIS SHAH
IT Operations & Digital Transformation Specialist

CONTACT INFORMATION
Email: smhs7861@yahoo.com
Phone: +966 54 534 5345
LinkedIn: smhs7861@gmail.com
Location: Saudi Arabia

PROFESSIONAL EXPERIENCE

Digital Transformation Training Specialist | TUV Rheinland Arabia LLC
May 2024 - Present
• Leading IT operations and digital transformation initiatives at NAVA Academy
• Managing comprehensive technology infrastructure including LMS, CRM, websites, and simulator setups
• Microsoft 365 Administration, Network Infrastructure, Vendor Management, SolidWorks

Software Project Manager | IT Bridge Consulting Services
January 2023 - April 2024
• Managed software development projects with focus on requirement engineering
• Work breakdown and cross-functional team collaboration
• Delivered high-quality solutions through effective project management methodologies

Senior Software Engineer | Codify (Private) Limited
January 2021 - December 2022
• Demonstrated professional competency and dedication in software development
• Delivered projects with utmost sincerity while maintaining high code quality standards

Software Engineer I | Uforia Infotech Solutions
February 2019 - December 2020
• Developed web-based applications using HTML, CSS, JavaScript, and React.js
• Established foundation in professional software development

EDUCATION

Bachelor of Computer Science | Hazara University | 2019
• Comprehensive computer science education with focus on software development, system design, algorithms, and database management
• Graduated with strong foundation in programming, data structures, and software engineering principles

Masters in Cyber Security | Starting September 2025  
• Advanced degree focusing on cybersecurity, network security, and digital forensics
• Comprehensive graduate program covering advanced cybersecurity concepts, network security protocols, digital forensics, and risk management
• Designed to enhance skills in protecting organizational digital assets and managing cyber threats

CERTIFICATIONS
• CCNA Certification (Exam: August 22, 2025)
• Full Stack Web Development Bootcamp (Completed)
• Python for Machine Learning (Completed)
• React.js Development (Completed)

TECHNICAL SKILLS
• Development: React.js, JavaScript, HTML/CSS, Python, Full Stack Development
• IT Operations: Microsoft 365 Admin, Network Infrastructure, System Administration
• Digital Transformation: Power Automate, Power BI, LMS Management, CRM Systems
• Specialized Tools: SolidWorks, Lucas Nuella Simulators, Project Management
`;
}
