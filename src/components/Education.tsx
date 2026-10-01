import { educations } from "@/data/portfolio";
import GlowCard from "./GlowCard";
import { GraduationIcon } from "./Icons";
import SectionTitle from "./SectionTitle";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle>Education</SectionTitle>

        <ul className={styles.grid}>
          {educations.map((edu) => (
            <GlowCard key={edu.id} as="li" className={styles.card}>
              <p className={styles.duration}>{edu.duration}</p>
              <div className={styles.row}>
                <span className={styles.icon}>
                  <GraduationIcon size={26} />
                </span>
                <div>
                  <h3>{edu.title}</h3>
                  <p>{edu.institution}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
