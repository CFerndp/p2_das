"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import ProvinceLocalitySelector from "./(partials)/ProvinceLocalitySelector";
import InitTemplate from "@/components/InitTemplate/InitTemplate";

export default function Register() {
  const [province, setProvince] = useState("");
  const [locality, setLocality] = useState("");

  return (
    <InitTemplate>
      <h1>Crea tu usuario</h1>
      <form className={styles.loginForm}>
        <input type="text" placeholder="Usuario" name="username" required />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          required
        />
        <input type="text" placeholder="Nombre" name="name" required />
        <input type="text" placeholder="Apellido" name="lastName" required />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          name="birthDate"
          required
        />
        <ProvinceLocalitySelector
          province={province}
          setProvince={setProvince}
          locality={locality}
          setLocality={setLocality}
        />
        <button type="submit">Registrar</button>
      </form>
      <p>
        ¿Tienes una cuenta? <Link href="/login">Inicia sesión</Link>
      </p>
    </InitTemplate>
  );
}
