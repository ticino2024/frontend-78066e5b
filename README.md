# Social Media Analytics Dashboard

A modern, production-ready React + TypeScript application for tracking and analyzing social media performance with real-time data visualization, user engagement metrics, and content performance tracking.

## 🚀 Features

- **Real-time Analytics**: Live updates of social media metrics and engagement data
- **Interactive Dashboard**: Comprehensive overview with key performance indicators
- **Data Visualization**: Beautiful charts and graphs using Recharts
- **Content Performance**: Track individual posts across multiple platforms
- **Multi-Platform Support**: Analyze data from Twitter, Facebook, Instagram, and LinkedIn
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Authentication**: Secure login and signup with protected routes
- **State Management**: Efficient state handling with Zustand
- **API Integration**: Ready-to-use API client with React Query
- **Form Validation**: Robust validation with React Hook Form and Zod
- **Error Handling**: Comprehensive error boundaries and loading states
- **Testing**: Unit tests with Jest and React Testing Library
- **Docker Support**: Production-ready containerization

## 📋 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Containerization**: Docker + Docker Compose

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd workspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure your API endpoints:
   ```
   VITE_API_BASE_URL=http://localhost:8000/api
   VITE_WS_URL=ws://localhost:8000/ws
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 🐳 Docker Deployment

### Build and run with Docker

```bash
# Build the Docker image
docker build -t social-media-dashboard .

# Run the container
docker run -p 3000:80 social-media-dashboard
```

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f frontend
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Lint code with ESLint
- `npm run type-check` - Check TypeScript types

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── charts/         # Chart components
│   ├── __tests__/      # Component tests
│   ├── ErrorFallback.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── MetricCard.tsx
│   ├── ProtectedRoute.tsx
│   ├── RealtimeWidget.tsx
│   └── Sidebar.tsx
├── pages/              # Page components
│   ├── __tests__/      # Page tests
│   ├── Analytics.tsx
│   ├── ContentPerformance.tsx
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── Settings.tsx
│   └── Signup.tsx
├── store/              # State management
│   ├── __tests__/
│   └── authStore.ts
├── lib/                # Utilities and helpers
│   ├── axios.ts        # API client
│   └── mockData.ts     # Mock data generators
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Root component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🔐 Authentication

The application includes a complete authentication system with:

- Login and signup pages
- Form validation
- Protected routes
- Token-based authentication
- Persistent sessions with local storage

**Demo Credentials**: Use any email and password (6+ characters) for testing purposes.

## 📊 Features Overview

### Dashboard
- Real-time activity widget
- Key performance metrics (followers, engagement, posts, engagement rate)
- Engagement trends chart
- Platform performance comparison

### Analytics
- Deep dive into performance metrics
- Time range filtering (7/30/90 days)
- Growth rate analysis
- Detailed platform breakdown table
- Export functionality

### Content Performance
- Track individual posts across platforms
- Search and filter capabilities
- Engagement metrics per post (likes, comments, shares, views)
- Platform-specific insights

### Settings
- Profile management
- Notification preferences
- Security settings
- Platform integrations

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The optimized build will be in the `dist/` directory.

## 🔧 Configuration

### Environment Variables

- `VITE_API_BASE_URL` - Backend API base URL
- `VITE_WS_URL` - WebSocket URL for real-time updates

### API Integration

The application includes a pre-configured Axios client (`src/lib/axios.ts`) with:
- Automatic token injection
- Response/request interceptors
- Error handling
- 401 redirect to login

To integrate with your backend:
1. Update the `.env` file with your API URL
2. Replace mock data calls with actual API endpoints
3. Update types in `src/types/index.ts` to match your API responses

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎨 Customization

### Tailwind Theme

Customize colors and styles in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Components

All components are built with reusability in mind and accept props for customization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Known Issues

- Mock data is used for demonstration purposes
- WebSocket connection is not implemented (placeholder in env)
- Some features require backend integration

## 🗺️ Roadmap

- [ ] Real-time WebSocket integration
- [ ] Advanced filtering and date range selection
- [ ] Export to PDF/CSV functionality
- [ ] Dark mode support
- [ ] Advanced analytics with AI insights
- [ ] Scheduled reports via email
- [ ] Multi-user support and team collaboration

## 💡 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

Built with ❤️ using React + TypeScript + Vite
