"use client";

import Link from "next/link";
import { $auth } from "@/stores/user";
import { useStore } from "@nanostores/react";

import styles from "./authButton.module.scss";

const AuthButton = () => {
  const auth = useStore($auth);

  return (
    <section className={styles.wrapper}>
      {auth ? (
        <button onClick={() => $auth.set(false)} className={styles.button}>
          Выйти
        </button>
      ) : (
        <button className={styles.button}>
          <Link href={"/login"}>Войти</Link>
        </button>
      )}
    </section>
  );
};
export default AuthButton;
