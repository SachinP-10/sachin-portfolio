import type { CSSProperties } from "react";
import type { Skill } from "@/types";
import styles from "./SkillIcon.module.css";

// Every SVG in src/assets/skills is picked up automatically, keyed by file name.
const icons = import.meta.glob<string>("../assets/skills/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const iconUrl = (key?: string): string | undefined =>
  key ? icons[`../assets/skills/${key}.svg`] : undefined;

/** Two-letter monogram used when a skill has no logo, e.g. "Spring Boot" -> "SB". */
const monogram = (name: string): string => {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : words[0].slice(0, 2).replace(/^./, (c) => c.toUpperCase());
};

/** Brand-coloured gradients; each skill gets a stable one based on its name. */
const palette: [string, string][] = [
  ["#ec4899", "#7c3aed"],
  ["#7c3aed", "#4f46e5"],
  ["#0ea5e9", "#7c3aed"],
  ["#14b8a6", "#0ea5e9"],
  ["#f43f5e", "#ec4899"],
];

const colours = (name: string): [string, string] =>
  palette[[...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % palette.length];

export default function SkillIcon({ skill, size = 40 }: { skill: Skill; size?: number }) {
  const url = iconUrl(skill.icon);

  if (url) {
    return <img src={url} alt="" width={size} height={size} className={styles.img} loading="lazy" />;
  }

  const [a, b] = colours(skill.name);
  return (
    <span
      className={styles.mono}
      style={{ width: size, height: size, "--a": a, "--b": b } as CSSProperties}
      aria-hidden
    >
      {monogram(skill.name)}
    </span>
  );
}
