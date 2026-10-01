import { skills } from "@/data/portfolio";
import type { SkillCategory } from "@/types";
import SectionTitle from "./SectionTitle";
import SkillIcon from "./SkillIcon";
import styles from "./Skills.module.css";

const categories: SkillCategory[] = ["Languages", "Backend", "Databases", "Tools"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="glow-blob" style={{ width: 160, height: 160, background: "#ede9fe33", top: 40, left: "45%" }} />

      <div className="container">
        <SectionTitle>Skills</SectionTitle>
      </div>

      {/* Infinite marquee: the list is rendered twice and slid by -50% */}
      <div className={styles.marquee} aria-hidden>
        <div className={styles.track}>
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className={`${styles.tile} ${i >= skills.length ? styles.dup : ""}`}
            >
              <SkillIcon skill={skill} size={42} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Readable, grouped list (also what screen readers get) */}
      <div className={`container ${styles.groups}`}>
        {categories.map((cat) => (
          <div key={cat} className={styles.group}>
            <h3>{cat}</h3>
            <ul>
              {skills
                .filter((s) => s.category === cat)
                .map((s) => (
                  <li key={s.name}>{s.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
