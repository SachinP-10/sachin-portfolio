import { experiences, projects } from "@/data/portfolio";
import GlowCard from "./GlowCard";
import { BriefcaseIcon } from "./Icons";
import SectionTitle from "./SectionTitle";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>

        <ol className={styles.timeline}>
          {experiences.map((exp) => (
            <li key={exp.id} className={styles.item}>
              <span className={styles.dot} aria-hidden />
              <GlowCard className={styles.card}>
                <header className={styles.head}>
                  <div className={styles.icon}>
                    <BriefcaseIcon size={28} />
                  </div>
                  <div className={styles.titles}>
                    <h3>{exp.role}</h3>
                    <p>
                      {exp.company}, {exp.location}
                    </p>
                  </div>
                  <p className={styles.duration}>
                    {exp.start} – {exp.end}
                  </p>
                </header>

                <ul className={styles.highlights}>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {exp.id === 1 && (
                  <div className={styles.projects}>
                    <p>Projects built here</p>
                    <ul>
                      {projects.map((p) => (
                        <li key={p.id}>
                          <a href={`#project-${p.id}`}>{p.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlowCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
