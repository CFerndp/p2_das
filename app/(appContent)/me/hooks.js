"use client";

import { getUserMe } from "./utils";
import { useEffect, useState } from "react";

export const useUserForm = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const user = await getUserMe();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form data:", Object.fromEntries(formData));
  };

  return { user, loading, handleSubmit };
};
