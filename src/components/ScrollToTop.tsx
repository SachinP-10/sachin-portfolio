import { useScrolled } from "@/hooks/useScrolled";
import { ArrowUpIcon } from "./Icons";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const visible = useScrolled(600);

  return (
    <button
      type="button"
      className={`${styles.btn} ${visible ? styles.show : ""}`}
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpIcon size={22} />
    </button>
  );
}
