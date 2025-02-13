import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  isLoginModalOpen: false,
  setIsLoginModalOpen: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const login = (email, password) => {
    // In a real app, you would validate credentials with a backend
    setUser({ email });
    setIsLoginModalOpen(false);
  };

  const register = (email, password) => {
    // In a real app, you would send registration data to a backend
    setUser({ email });
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoginModalOpen,
    setIsLoginModalOpen,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
