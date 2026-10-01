import { personal } from "@/data/portfolio";
import { LocationIcon, MailIcon } from "./Icons";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h2 className="visually-hidden">About me</h2>
          <p className={styles.eyebrow}>Who I am</p>
          {personal.about.map((p) => (
            <p key={p.slice(0, 24)} className={styles.para}>
              {p}
            </p>
          ))}

          <ul className={styles.facts}>
            <li>
              <LocationIcon size={18} />
              {personal.address}
            </li>
            <li>
              <MailIcon size={18} />
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.photoWrap}>
          <img
            src={personal.profileImage}
            alt={`Portrait of ${personal.fullName}`}
            width={300}
            height={298}
            loading="lazy"
            className={styles.photo}
          />
        </div>

        <div className={styles.sideLabel} aria-hidden>
          <span>About me</span>
          <i />
        </div>
      </div>
    </section>
  );
}
