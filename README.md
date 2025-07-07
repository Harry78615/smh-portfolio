# Syed Muhammad Haris Shah - Professional Portfolio

A modern, responsive portfolio website showcasing my expertise in IT Operations, Digital Transformation, and Software Development.

##Final Build Trigger
## 📋 Features

- **Modern Design**: Clean, professional interface with animated background patterns
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling navigation and hover effects
- **Contact Form**: PostgreSQL-backed contact system with form validation
- **Resume Download**: Automated PDF resume generation
- **Glass Effects**: Modern UI with backdrop blur and transparency effects

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **TanStack Query** for data fetching
- **React Hook Form** with Zod validation
- **Vite** for build tooling

### Backend
- **Express.js** with TypeScript
- **PostgreSQL** database
- **Drizzle ORM** for database operations
- **Zod** for schema validation

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
│   └── public/            # Static assets
├── server/                # Backend Express application
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Database operations
│   └── db.ts             # Database configuration
├── shared/                # Shared TypeScript types
│   └── schema.ts         # Database schema definitions
└── attached_assets/       # Document attachments
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   PORT=5000
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## 🎨 Customization

### Updating Content

- **Experience**: Edit `client/src/components/Experience.tsx`
- **Skills**: Modify `client/src/components/Skills.tsx`
- **Projects**: Update `client/src/components/Projects.tsx`
- **Education**: Edit `client/src/components/Education.tsx`
- **Contact Info**: Update `client/src/components/Contact.tsx`

### Styling Changes

- **Colors**: Modify CSS variables in `client/src/index.css`
- **Components**: Individual component styling in respective files
- **Global Styles**: Update Tailwind configuration in `tailwind.config.ts`

## 🚀 Deployment

### Replit Deployment

1. Click the "Deploy" button in your Replit environment
2. Configure custom domain (optional)
3. Your site will be available at `your-repl-name.username.replit.app`

### Other Platforms

The application can be deployed to:
- Vercel
- Netlify
- Heroku
- DigitalOcean App Platform

Ensure environment variables are configured on your chosen platform.

## 📧 Contact

- **Email**: smhs7861@yahoo.com
- **Phone**: +966 54 534 5345
- **LinkedIn**: smhs7861@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🏗️ Built With

This portfolio showcases my technical expertise in:
- Full-stack web development
- Modern JavaScript/TypeScript frameworks
- Database design and management
- Cloud deployment and DevOps
- UI/UX design principles

---

*This portfolio represents my journey from Software Engineer to IT Operations & Digital Transformation Specialist, highlighting projects and skills developed at TUV Rheinland Arabia LLC and previous organizations.*
