import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { CloseIcon, MenuIcon } from "./Icons";
import styles from "./Navbar.module.css";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();

  // Close the mobile menu with Escape and lock body scroll while it's open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          {personal.name}
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        <ul id="nav-menu" className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? styles.active : undefined}
                aria-current={active === link.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
