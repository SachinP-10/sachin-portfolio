import { useRef, type PointerEvent, type ReactNode } from "react";
import styles from "./GlowCard.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
}

/**
 * A card with a pink/violet spotlight border that follows the pointer.
 * The pointer position is written to CSS custom properties; CSS does the rest.
 */
export default function GlowCard({ children, className = "", as: Tag = "article" }: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as never}
      className={`${styles.card} ${className}`}
      onPointerMove={onMove}
    >
      {children}
    </Tag>
  );
}
