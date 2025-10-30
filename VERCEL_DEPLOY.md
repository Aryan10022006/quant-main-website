# Vercel Deployment Guide

This guide will help you deploy the Quant Community website to Vercel.

## 🚀 Quick Deploy

### Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (sign up at [vercel.com](https://vercel.com))

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings** (Auto-configured)
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install --legacy-peer-deps`

4. **Environment Variables** (Optional)
   - Add any environment variables if needed
   - Click "Add" for each variable

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `quant-iitb`
   - In which directory is your code located? `./`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["bom1"]
}
```

### package.json (Already configured)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## 🔧 Build Configuration

### Next.js Config (next.config.js)
The project uses:
- Standalone output for optimized builds
- Unoptimized images for better compatibility
- React Strict Mode enabled

## 🌐 Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-10 minutes)

## 📱 Mobile Responsive

The site is fully mobile responsive with:
- Responsive typography (text-4xl sm:text-5xl md:text-6xl)
- Flexible layouts (flex-col sm:flex-row)
- Mobile-first padding and spacing (px-4 sm:px-6 lg:px-8)
- Responsive grids (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- Optimized images for all screen sizes

Tested breakpoints:
- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

## 🔍 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Navigation works on mobile
- [ ] Contact forms function (if any)
- [ ] All links work
- [ ] Favicon appears in browser tab
- [ ] Meta tags display correctly in social shares

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try running `npm run build` locally first

### Images Not Loading
- Verify image paths start with `/`
- Check public folder structure
- Ensure images are committed to Git

### Peer Dependency Warnings
- Use `npm install --legacy-peer-deps` in build command
- This is already configured in vercel.json

## 📊 Performance

Vercel provides:
- Automatic HTTPS
- Global CDN
- Image optimization
- Edge functions
- Analytics (Pro plan)

## 🔄 Continuous Deployment

Every push to your main branch will:
1. Trigger automatic deployment
2. Run build process
3. Deploy to production
4. Update your live site

Preview deployments are created for:
- Pull requests
- Non-production branches

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## 🎉 Success!

Your Quant Community website is now live on Vercel!

**Production URL**: `https://your-project.vercel.app`

Share your site and start engaging with the community!
