"use client";

import Card from "@/components/Card/Card";
import { useUserForm } from "./hooks";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";

const UserME = () => {
  const { user, loading, handleSubmit } = useUserForm();

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>Mi Perfil</h2>
      <Card className={styles.cardContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label>Nombre de usuario</label>
            <input
              type="text"
              name="username"
              defaultValue={user?.username}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Nombre</label>
            <input
              type="text"
              name="first_name"
              defaultValue={user?.first_name}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Apellido</label>
            <input
              type="text"
              name="last_name"
              defaultValue={user?.last_name}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              name="birth_date"
              defaultValue={user?.birth_date}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Localidad</label>
            <input
              type="text"
              name="locality"
              defaultValue={user?.locality}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Municipio</label>
            <input
              type="text"
              name="municipality"
              defaultValue={user?.municipality}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <Button type="submit" label="Actualizar Perfil" />
            <Link href="/auctions">
              <Button type="submit" label="Volver" />
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserME;
