import { useAuthContext } from '../context/AuthContext';

export function useAuth() {
  const { isAuthenticated, login, logout } = useAuthContext();
  return { isAuthenticated, login, logout };
}
