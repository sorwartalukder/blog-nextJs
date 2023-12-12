"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {

  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
