import { personal } from "@/data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <p>
          © {new Date().getFullYear()}{" "}
          <a href={personal.linkedIn} target="_blank" rel="noreferrer">
            {personal.fullName}
          </a>
        </p>
        <p className={styles.built}>Built with React, TypeScript and modern CSS</p>
      </div>
    </footer>
  );
}
