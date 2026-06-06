import { createContext, useContext, useMemo, useState } from "react";
import { ROLES, roleDashboardPath } from "../utils/roles.js";

const AuthContext = createContext(null);

const demoUsers = {
  [ROLES.ADMIN]: {
    name: "Principal Meera Nair",
    email: "admin@mvps.edu.in",
    role: ROLES.ADMIN,
    subtitle: "School Administrator",
  },
  [ROLES.TEACHER]: {
    name: "Mrs. Ananya Rao",
    email: "teacher@mvps.edu.in",
    role: ROLES.TEACHER,
    subtitle: "Class Teacher | Class 8-B",
  },
  [ROLES.STUDENT]: {
    name: "Aarav Sharma",
    email: "student@mvps.edu.in",
    role: ROLES.STUDENT,
    subtitle: "Class 10-B | Roll No: 12",
  },
  [ROLES.PARENT]: {
    name: "Sharma Family",
    email: "parent@mvps.edu.in",
    role: ROLES.PARENT,
    subtitle: "Parent Portal",
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("mvps-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async ({ role = ROLES.ADMIN }) => {
    const selectedUser = demoUsers[role] || demoUsers[ROLES.ADMIN];
    localStorage.setItem("mvps-user", JSON.stringify(selectedUser));
    setUser(selectedUser);
    return { user: selectedUser, redirectTo: roleDashboardPath[selectedUser.role] };
  };

  const logout = () => {
    localStorage.removeItem("mvps-user");
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
