# Deployment Guide

## Quick Deploy on Replit

Your portfolio is already running on Replit! To deploy it:

1. **Click the Deploy button** in your Replit interface
2. **Configure settings**:
   - App name: `haris-shah-portfolio`
   - Description: "Professional IT Portfolio"
3. **Deploy** and get your live URL

## Environment Variables

Make sure these are set in your deployment:

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
PORT=5000
```

## Alternative Deployment Options

### 1. Vercel (Recommended for Frontend)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 2. Netlify

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

### 3. DigitalOcean App Platform

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure environment variables

### 4. Heroku

```bash
# Install Heroku CLI
# Create Heroku app
heroku create haris-portfolio

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main
```

## Custom Domain Setup

1. **Purchase domain** (e.g., harisshah.dev)
2. **Configure DNS**:
   - CNAME: www → your-deployment-url
   - A Record: @ → deployment-ip
3. **Update deployment settings** with custom domain

## SSL Certificate

Most platforms (Vercel, Netlify, Replit) provide automatic SSL certificates. For custom setups, use:
- Let's Encrypt (free)
- Cloudflare (free tier available)

## Performance Optimization

- Enable gzip compression
- Configure CDN for static assets
- Set up proper caching headers
- Optimize images (already done for profile.jpg)

## Monitoring

Consider adding:
- Google Analytics
- Error tracking (Sentry)
- Uptime monitoring
- Performance monitoring

## Backup Strategy

- Database: Regular PostgreSQL backups
- Code: GitHub repository (version controlled)
- Assets: Cloud storage backup

Your portfolio is production-ready and can be deployed immediately!