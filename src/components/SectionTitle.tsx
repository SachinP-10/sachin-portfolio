import styles from "./SectionTitle.module.css";

interface Props {
  children: string;
  align?: "center" | "start";
}

/** The pill-shaped section heading with lines on either side, carried over from the original site. */
export default function SectionTitle({ children, align = "center" }: Props) {
  return (
    <div className={`${styles.wrap} ${align === "start" ? styles.start : ""}`}>
      <span className={styles.line} aria-hidden />
      <h2 className={styles.pill}>{children}</h2>
      <span className={styles.line} aria-hidden />
    </div>
  );
}
