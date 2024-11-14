"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface UseAuthResult {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  navigate: (path: string) => void;
}

export function useAuth(): UseAuthResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/auth/signup", { email, password });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Signup failed");
      } else {
        setError("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const navigate = (path: string) => {
    window.location.href = path;
  };

  return { login, signup, loading, error, isLoggedIn, navigate };
}
