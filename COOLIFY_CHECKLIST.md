# ✅ Coolify Deployment Checklist

## Pre-Deployment

- [x] **Dockerfile created** - Multi-stage build configuration
- [x] **coolify.yaml created** - Coolify-specific settings
- [x] **.dockerignore created** - Optimized build
- [x] **next.config.js updated** - Standalone output enabled
- [x] **Dependencies installed** - package.json complete
- [x] **Build tested** - Can run `npm run build` successfully
- [x] **Images optimized** - All images in public/ folder
- [x] **No environment secrets** - No sensitive data in code

## Deployment Steps

### 1. Push to Git Repository
```bash
git add .
git commit -m "Ready for Coolify deployment"
git push origin main
```

### 2. In Coolify Dashboard

#### Step 1: Create New Resource
- Go to **Projects** → **New Project** (or select existing)
- Click **Add New Resource**
- Select **Public Repository** or **Private Repository**

#### Step 2: Repository Settings
- **Git URL**: `https://github.com/your-org/quant-website.git`
- **Branch**: `main` (or your default branch)
- **Build Pack**: Select **Dockerfile**

#### Step 3: Application Settings
- **Port**: `3000`
- **Health Check Path**: `/`
- **Health Check Interval**: `30s`
- **Dockerfile Path**: `./Dockerfile` (default)

#### Step 4: Environment Variables (Optional)
Add if needed:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

#### Step 5: Deploy
- Click **Deploy** button
- Monitor build logs
- Wait for "Deployment successful" message

### 3. Post-Deployment

#### Verify Deployment
- [ ] Open provided URL
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] No console errors

#### Configure Domain (Optional)
- [ ] Add custom domain in Coolify
- [ ] Update DNS records
- [ ] Wait for SSL certificate
- [ ] Test domain access

#### Enable Auto-Deploy (Optional)
- [ ] Go to **Git** settings
- [ ] Enable **Auto Deploy on Git Push**
- [ ] Add webhook to Git provider
- [ ] Test with a commit

## Build Information

**Build Time**: ~3-5 minutes
**Image Size**: ~200-300 MB (optimized)
**Port**: 3000
**Node Version**: 18-alpine

## Troubleshooting

### Build Fails
**Check:**
- All dependencies in package.json
- No syntax errors in code
- Dockerfile syntax correct

**Solution:**
```bash
# Test build locally
npm run build
```

### Health Check Fails
**Check:**
- Application starts on port 3000
- Health check path is accessible
- No startup errors in logs

**Solution:**
- View logs in Coolify
- Check application startup

### Images Not Loading
**Check:**
- Images are in public/ folder
- Image paths are correct
- Files committed to Git

**Solution:**
- Verify file paths: `/images/...`
- Check .dockerignore doesn't exclude images

## Monitoring

After deployment, monitor:
- [ ] Response time (should be <2s)
- [ ] Memory usage (should be <500MB)
- [ ] CPU usage (should be <50%)
- [ ] Error logs (should be zero)

## Rollback Plan

If deployment fails:
1. Go to Coolify dashboard
2. Click **Deployments** tab
3. Select previous working deployment
4. Click **Redeploy**

## Support Resources

- **Coolify Docs**: https://coolify.io/docs
- **Coolify Discord**: https://coollabs.io/discord
- **Project Issues**: Create issue in Git repository
- **Emergency Contact**: quantcommunity@iitb.ac.in

---

## Quick Commands

```bash
# Build locally to test
npm run build

# Test production build
npm run start

# View build output
ls -la .next/

# Test Docker build (if Docker installed)
docker build -t quant-website .
docker run -p 3000:3000 quant-website
```

---

**Ready to Deploy!** 🚀

Follow [COOLIFY_DEPLOY.md](./COOLIFY_DEPLOY.md) for detailed instructions.
