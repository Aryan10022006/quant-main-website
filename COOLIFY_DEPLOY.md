# Coolify Deployment Guide

This guide will help you deploy the Quant Community website to Coolify.

## Prerequisites

- Access to a Coolify instance
- Git repository (GitHub, GitLab, or Gitea)
- Docker support enabled on Coolify

## Quick Start

### 1. Connect Your Repository

1. Log into your Coolify dashboard
2. Go to **Projects** → **New Project**
3. Click **Add New Resource** → **Public Repository** or **Private Repository**
4. Enter your Git repository URL
5. Select the branch to deploy (usually `main` or `master`)

### 2. Configure Application

1. **Application Type**: Select **Dockerfile**
2. **Port**: Set to `3000`
3. **Build Pack**: Docker
4. **Health Check Path**: `/`

### 3. Environment Variables (Optional)

In the Coolify UI, add these environment variables if needed:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 4. Deploy

1. Click **Deploy** button
2. Wait for the build to complete (usually 3-5 minutes)
3. Your site will be available at the provided URL

## Configuration Files

The following files have been added for Coolify deployment:

- **`Dockerfile`**: Multi-stage Docker build configuration
- **`coolify.yaml`**: Coolify-specific configuration
- **`.dockerignore`**: Files to exclude from Docker build
- **`next.config.js`**: Updated with `output: 'standalone'` for Docker

## Build Process

The Docker build happens in 3 stages:

1. **deps**: Install dependencies
2. **builder**: Build the Next.js application
3. **runner**: Create minimal production image

## Customization

### Custom Domain

1. Go to your application in Coolify
2. Navigate to **Domains** tab
3. Add your custom domain
4. Configure DNS records as shown

### Environment Variables

Add environment variables in Coolify UI:
- Go to **Environment Variables** tab
- Click **Add Variable**
- Enter key and value
- Redeploy the application

### SSL Certificate

Coolify automatically provides SSL certificates via Let's Encrypt when you add a custom domain.

## Troubleshooting

### Build Fails

**Issue**: Docker build fails with dependency errors
**Solution**: Check that `package.json` includes all dependencies

### Port Already in Use

**Issue**: Port 3000 is already allocated
**Solution**: Coolify will automatically assign a different port - update the configuration

### Images Not Loading

**Issue**: Images return 404
**Solution**: Ensure all images are in the `public/` directory and committed to Git

### Health Check Fails

**Issue**: Health check endpoint returns errors
**Solution**: Verify the application starts on port 3000 and responds to GET requests at `/`

## Performance Optimization

### Image Optimization

Images are set to `unoptimized: true` in `next.config.js` for compatibility. For better performance:

1. Pre-optimize images before adding to repository
2. Use WebP format where possible
3. Keep image sizes reasonable (<500KB)

### Caching

Add these headers in Coolify:
- Go to **Custom Nginx Configuration**
- Add caching rules for static assets

## Monitoring

### Logs

View application logs in Coolify:
1. Go to your application
2. Click **Logs** tab
3. View real-time logs

### Resource Usage

Monitor CPU and memory:
1. Go to **Metrics** tab
2. View resource usage graphs

## Updating the Application

### Manual Deploy

1. Go to your application in Coolify
2. Click **Deploy** button
3. Latest code from Git will be pulled and deployed

### Auto-Deploy

Enable auto-deploy:
1. Go to **Git** tab
2. Enable **Auto Deploy on Git Push**
3. Configure webhook in your Git provider

## Scaling

For high traffic, consider:

1. **Horizontal Scaling**: Deploy multiple instances
2. **Load Balancer**: Use Coolify's built-in load balancing
3. **CDN**: Use Cloudflare or similar for static assets

## Support

For Coolify-specific issues:
- Documentation: https://coolify.io/docs
- Discord: https://coollabs.io/discord
- GitHub: https://github.com/coollabsio/coolify

For website issues:
- Contact: quantcommunity@iitb.ac.in

---

**Last Updated**: October 30, 2025
