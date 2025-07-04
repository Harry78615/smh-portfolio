# Personal Portfolio Website

## Overview

This is a personal portfolio website for Syed Muhammad Haris Shah, an IT Operations & Digital Transformation Specialist currently working at TUV Rheinland Arabia LLC. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing professional experience, skills, and providing a contact mechanism.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development) with plans for PostgreSQL sessions
- **API Design**: RESTful endpoints with JSON responses

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Professional introduction and download resume functionality
- **Experience**: Timeline of professional work experience
- **Skills**: Categorized skill showcase with visual elements
- **Projects**: Portfolio of completed projects and ongoing work
- **Education**: Academic background and certifications
- **Contact**: Contact form with validation and submission handling

### Backend Components
- **Contact API**: Handles contact form submissions with validation
- **Resume Generation**: Provides resume download functionality
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data is validated using Zod schema
3. Data is sent to `/api/contact` endpoint
4. Backend validates data and stores contact information
5. Success/error response is sent back to frontend
6. User receives feedback via toast notifications

### Resume Download Flow
1. User clicks download resume button
2. Frontend makes request to `/api/download-resume`
3. Backend generates resume content
4. PDF response is sent with appropriate headers
5. Browser initiates download

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Icons**: Lucide React icons and Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Validation**: Zod for schema validation
- **HTTP Client**: Fetch API with TanStack Query

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) via @neondatabase/serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for request validation
- **Session Store**: connect-pg-simple for PostgreSQL sessions

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Development Server**: Vite dev server with HMR
- **Linting**: ESLint configuration
- **CSS Processing**: PostCSS with Tailwind CSS

## Deployment Strategy

### Development Environment
- **Frontend**: Vite development server with hot module replacement
- **Backend**: tsx for TypeScript execution in development
- **Database**: Neon serverless PostgreSQL database
- **Environment**: Replit-optimized with cartographer plugin

### Production Build
- **Frontend**: Vite build to `dist/public` directory
- **Backend**: esbuild bundling to `dist/index.js`
- **Static Assets**: Served via Express static middleware
- **Database**: Production PostgreSQL via DATABASE_URL environment variable

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **PORT**: Server port (defaults to process.env.PORT)

## Changelog

```
Changelog:
- July 04, 2025. Initial setup with full-stack portfolio website
- July 04, 2025. Added PostgreSQL database integration with Drizzle ORM
- July 04, 2025. Enhanced education section with detailed degree descriptions
- July 04, 2025. Implemented DatabaseStorage replacing MemStorage for persistent data
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```