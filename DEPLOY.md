# Deploy to Netlify

## Option 1: Deploy via Netlify Web Interface (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Netlify**:
   - Visit https://app.netlify.com
   - Sign up/Login with GitHub

3. **Deploy**:
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will auto-detect Next.js settings
   - Click "Deploy site"

4. **Build Settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (set in Environment variables)

## Option 2: Deploy via Netlify CLI (Alternative)

If CLI works:
```bash
netlify login
netlify init
netlify deploy --prod
```

## Environment Variables (if needed)

If you need to set any environment variables:
- Go to Site settings → Environment variables
- Add any required variables

## Custom Domain

After deployment:
- Go to Site settings → Domain management
- Add your custom domain

