# Contributing to Social Media Analytics Dashboard

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/social-media-dashboard.git
   cd social-media-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow existing code structure and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Naming Conventions

- **Components**: PascalCase (e.g., `MetricCard.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatNumber.ts`)
- **Types**: PascalCase (e.g., `UserProfile`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### Component Structure

```typescript
// Imports
import { useState } from 'react';
import { SomeIcon } from 'lucide-react';
import ComponentDependency from './ComponentDependency';

// Types/Interfaces
interface ComponentProps {
  title: string;
  value: number;
}

// Component
function Component({ title, value }: ComponentProps) {
  // Hooks
  const [state, setState] = useState(false);

  // Event handlers
  const handleClick = () => {
    setState(true);
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

export default Component;
```

## 🧪 Testing

### Writing Tests

- Write tests for all new components and functions
- Use descriptive test names
- Follow the AAA pattern: Arrange, Act, Assert
- Mock external dependencies

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage Requirements

- Minimum 70% code coverage
- All critical paths must be tested
- Test both success and error scenarios

## 🎨 Styling Guidelines

### Tailwind CSS

- Use Tailwind utility classes
- Follow mobile-first approach
- Use consistent spacing (multiples of 4: 4, 8, 12, 16, etc.)
- Use theme colors defined in `tailwind.config.js`

### Responsive Design

Test your changes on multiple screen sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 📦 Pull Request Process

### Before Submitting

1. **Run linting**
   ```bash
   npm run lint
   ```

2. **Run type checking**
   ```bash
   npm run type-check
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

### PR Guidelines

1. **Title**: Use clear, descriptive titles
   - Good: "Add dark mode toggle to settings"
   - Bad: "Update files"

2. **Description**: Include:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots (if UI changes)

3. **Size**: Keep PRs focused and reasonably sized
   - Ideal: < 400 lines changed
   - If larger, consider breaking into multiple PRs

4. **Commits**: Write clear commit messages
   - Use present tense: "Add feature" not "Added feature"
   - Be specific: "Add user avatar upload" not "Update UI"

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests passing

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors
- [ ] Tested on multiple browsers/devices
```

## 🐛 Bug Reports

### Before Reporting

1. Check existing issues
2. Verify it's reproducible
3. Test on the latest version

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
Add screenshots if applicable

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]
- Device: [e.g., iPhone 12]
- Version: [e.g., 1.0.0]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
What you want to happen

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Screenshots, mockups, or examples
```

## 🔧 Development Tips

### Useful Commands

```bash
# Check for type errors
npm run type-check

# Run linter
npm run lint

# Format code (if prettier is configured)
npm run format

# Analyze bundle size
npm run build -- --analyze
```

### Debugging

- Use React Developer Tools
- Check browser console for errors
- Use `console.log()` or debugger statements
- Check Network tab for API issues

### Common Patterns

#### API Calls with React Query

```typescript
export const useData = () => {
  return useQuery({
    queryKey: ['data', id],
    queryFn: async () => {
      const response = await apiClient.get('/endpoint');
      return response.data;
    },
  });
};
```

#### Form Handling

```typescript
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
});

const onSubmit = async (data) => {
  // Handle form submission
};
```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Query Docs](https://tanstack.com/query/latest)
- [Zustand Docs](https://github.com/pmndrs/zustand)

## 💬 Communication

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create an issue
- **Features**: Create an issue with feature request template
- **Security**: Email security@example.com (do not open public issue)

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!

---

If you have questions about contributing, feel free to open an issue or discussion.
