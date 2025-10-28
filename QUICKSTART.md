# Quick Start Guide

Get up and running with the Social Media Analytics Dashboard in 5 minutes!

## 🚀 Quick Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# 1. Navigate to the project directory
cd workspace

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at: **http://localhost:3000**

## 🔐 Login

For demo purposes, you can use any credentials:

- **Email**: any valid email format (e.g., `demo@example.com`)
- **Password**: any password with 6+ characters (e.g., `password123`)

## 📱 Features to Explore

### 1. Dashboard
- View real-time metrics
- See engagement trends
- Monitor platform performance
- Watch live activity updates

### 2. Analytics
- Filter data by time range (7/30/90 days)
- View detailed engagement charts
- Analyze growth rates
- Export reports

### 3. Content Performance
- Search and filter posts
- View engagement metrics per post
- Compare performance across platforms
- Track individual content pieces

### 4. Settings
- Update profile information
- Configure notifications
- Manage security settings
- Connect social media platforms

## 🎯 Key Navigation

```
Dashboard (/dashboard)
├── Overview metrics
├── Real-time widget
└── Engagement charts

Analytics (/analytics)
├── Time range filters
├── Engagement trends
└── Platform breakdown

Content (/content)
├── Post search
├── Platform filter
└── Performance metrics

Settings (/settings)
├── Profile
├── Notifications
├── Security
└── Integrations
```

## 💡 Tips

### Mock Data
The application currently uses mock data for demonstration. All metrics and charts are generated using realistic sample data.

### Responsive Design
Try resizing your browser or open on mobile devices - the dashboard is fully responsive!

### Keyboard Shortcuts
- `Ctrl/Cmd + K` - Quick search (when implemented)
- `Escape` - Close modals/dropdowns

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run linter
npm run lint

# Type checking
npm run type-check
```

## 🐳 Docker Quick Start

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access at http://localhost:3000

# Stop services
docker-compose down
```

## 🔧 Common Tasks

### Add a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Sidebar.tsx`

### Add a New API Endpoint

1. Add hook in `src/hooks/useYourFeature.ts`
2. Define types in `src/types/index.ts`
3. Use the hook in your component

### Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... more shades
      },
    },
  },
}
```

## 📊 Sample Data

The application includes:
- 30 days of engagement data
- 20 sample content posts
- 4 platform metrics (Instagram, Twitter, Facebook, LinkedIn)
- Real-time activity simulation

## 🔌 Backend Integration

To connect to a real backend:

1. Update `.env`:
   ```env
   VITE_API_BASE_URL=https://your-api.com/api
   ```

2. Replace mock data in hooks:
   ```typescript
   // In src/hooks/useDashboard.ts
   const response = await apiClient.get('/metrics');
   return response.data;
   ```

3. Update types to match your API responses

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### Dependencies Installation Failed
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf dist node_modules/.vite
npm run build
```

## 📚 Next Steps

1. **Explore the code**: Check out the component structure in `src/`
2. **Read the docs**: See `README.md` for comprehensive documentation
3. **Customize**: Update colors, add features, integrate your API
4. **Deploy**: Follow `DEPLOYMENT.md` for production deployment

## 🆘 Need Help?

- 📖 Check the full [README.md](README.md)
- 🚀 See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guides
- 🤝 Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- 🐛 Open an issue on GitHub

---

**Enjoy building with the Social Media Analytics Dashboard!** 🎉
