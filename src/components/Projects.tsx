import type { CSSProperties } from "react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./Icons";
import SectionTitle from "./SectionTitle";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle align="start">Projects</SectionTitle>

        {/* Cards stick and stack on top of each other as you scroll */}
        <div className={styles.stack}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={styles.sticky}
              style={{ "--i": index } as CSSProperties}
            >
              <div className={styles.card}>
                <div className={styles.inner}>
                  <header className={styles.head}>
                    <div>
                      <h3 className={styles.name}>{project.name}</h3>
                      <p className={styles.role}>{project.role}</p>
                    </div>
                    <span className={styles.kind}>{project.kind}</span>
                  </header>

                  <div className={styles.body}>
                    <div>
                      <p className={styles.summary}>{project.summary}</p>
                      <ul className={styles.points}>
                        {project.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>

                    <aside className={styles.tools}>
                      <p>Built with</p>
                      <ul>
                        {project.tools.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      {(project.code || project.demo) && (
                        <div className={styles.links}>
                          {project.code && (
                            <a href={project.code} target="_blank" rel="noreferrer">
                              <GithubIcon size={16} /> Code
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              Live demo
                            </a>
                          )}
                        </div>
                      )}
                    </aside>
                  </div>
                </div>
                <span className={styles.bar} aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
