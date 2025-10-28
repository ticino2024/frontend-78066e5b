# Deployment Guide

This guide covers different deployment strategies for the Social Media Analytics Dashboard.

## 📦 Building for Production

### Local Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build
npm run preview
```

The production build will be in the `dist/` directory.

## 🐳 Docker Deployment

### Option 1: Docker Build

```bash
# Build the Docker image
docker build -t social-media-dashboard:latest .

# Run the container
docker run -d -p 3000:80 --name dashboard social-media-dashboard:latest

# View logs
docker logs -f dashboard

# Stop the container
docker stop dashboard

# Remove the container
docker rm dashboard
```

### Option 2: Docker Compose

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## ☁️ Cloud Deployment

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   - Go to your project settings on Vercel
   - Add environment variables:
     - `VITE_API_BASE_URL`
     - `VITE_WS_URL`

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

### AWS S3 + CloudFront

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create a CloudFront distribution
   - Point it to your S3 bucket
   - Configure error pages to redirect to `index.html` for SPA routing

### Google Cloud Platform

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Cloud Storage**
   ```bash
   gsutil -m rsync -r -d dist gs://your-bucket-name
   ```

3. **Configure Cloud CDN**
   - Enable Cloud CDN on your bucket
   - Configure backend bucket settings

## 🔧 Environment Configuration

### Environment Variables

Create appropriate `.env` files for each environment:

**Development (.env.development)**
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws
```

**Staging (.env.staging)**
```env
VITE_API_BASE_URL=https://staging-api.yourdomain.com/api
VITE_WS_URL=wss://staging-api.yourdomain.com/ws
```

**Production (.env.production)**
```env
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_WS_URL=wss://api.yourdomain.com/ws
```

## 🔒 Security Checklist

Before deploying to production:

- [ ] Update all environment variables
- [ ] Enable HTTPS/SSL certificates
- [ ] Configure CORS on backend API
- [ ] Set up rate limiting
- [ ] Configure security headers
- [ ] Enable logging and monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure CDN and caching
- [ ] Test authentication flow
- [ ] Verify API endpoints
- [ ] Run security audit: `npm audit`

## 📊 Monitoring

### Recommended Tools

1. **Error Tracking**: Sentry, Rollbar
2. **Analytics**: Google Analytics, Mixpanel
3. **Performance**: Lighthouse, Web Vitals
4. **Uptime**: Pingdom, UptimeRobot

### Integration Example (Sentry)

```bash
npm install @sentry/react
```

```typescript
// src/main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

## 🚀 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          VITE_API_BASE_URL: ${{ secrets.API_BASE_URL }}
          VITE_WS_URL: ${{ secrets.WS_URL }}
          
      - name: Deploy to Production
        # Add your deployment step here
        run: echo "Deploy to your platform"
```

## 🔍 Post-Deployment Verification

1. **Functional Testing**
   - Test authentication flow
   - Verify all pages load correctly
   - Check API integration
   - Test responsive design

2. **Performance Testing**
   - Run Lighthouse audit
   - Check page load times
   - Verify asset optimization
   - Test on different devices/browsers

3. **Security Testing**
   - Verify HTTPS is enforced
   - Check security headers
   - Test authentication tokens
   - Verify CORS configuration

## 📝 Rollback Procedure

### Docker

```bash
# List previous images
docker images social-media-dashboard

# Run previous version
docker run -d -p 3000:80 social-media-dashboard:previous-tag
```

### Vercel/Netlify

Use the platform's dashboard to rollback to a previous deployment.

## 🆘 Troubleshooting

### Common Issues

**Issue**: Environment variables not loading
- **Solution**: Ensure `.env` file exists and variables are prefixed with `VITE_`

**Issue**: 404 errors on page refresh
- **Solution**: Configure server to redirect all routes to `index.html`

**Issue**: API CORS errors
- **Solution**: Configure backend CORS to allow your frontend domain

**Issue**: Build fails
- **Solution**: Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

## 📞 Support

For deployment issues or questions, please refer to:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Docker Documentation](https://docs.docker.com/)
- Platform-specific documentation

---

Last updated: 2025-10-28
