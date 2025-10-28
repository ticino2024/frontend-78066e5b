import { useAuthStore } from '../authStore';

describe('AuthStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useAuthStore.setState({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  });

  it('initializes with unauthenticated state', () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });

  it('logs in user successfully', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: new Date().toISOString(),
    };
    const mockToken = 'test-token';

    useAuthStore.getState().login(mockUser, mockToken);

    const state = useAuthStore.getState();
    expect(state.user).toEqual(mockUser);
    expect(state.token).toBe(mockToken);
    expect(state.isAuthenticated).toBe(true);
  });

  it('logs out user successfully', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: new Date().toISOString(),
    };
    const mockToken = 'test-token';

    useAuthStore.getState().login(mockUser, mockToken);
    useAuthStore.getState().logout();

    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });

  it('updates user information', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: new Date().toISOString(),
    };
    const mockToken = 'test-token';

    useAuthStore.getState().login(mockUser, mockToken);
    useAuthStore.getState().updateUser({ name: 'Updated Name' });

    const state = useAuthStore.getState();
    expect(state.user?.name).toBe('Updated Name');
    expect(state.user?.email).toBe('test@example.com');
  });
});
