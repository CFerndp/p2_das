"use client";

import InitTemplate from "@/components/InitTemplate/InitTemplate";
import Link from "next/link";
import styles from "./page.module.css";
import { doLogin } from "./utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const username = formData.get("username");
    const password = formData.get("password");

    setLoading(true);
    try {
      const userLogged = await doLogin(username, password);

      if (userLogged.error) {
        alert(userLogged.error);
        return;
      }

      localStorage.setItem("token-jwt", userLogged.access);
      localStorage.setItem("userName", userLogged.username);

      router.push("/auctions");
    } catch {
      alert("Algo salio mal!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <InitTemplate>
      <h1>Bienvenid@! Inicia sesión</h1>
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <input type="text" name="username" required />
        <input type="password" name="password" required />
        {loading ? (
          <p>Espere, por favor...</p>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
      <p>
        No tienes cuenta? <Link href="/register">Regístrate</Link>
      </p>
    </InitTemplate>
  );
}
