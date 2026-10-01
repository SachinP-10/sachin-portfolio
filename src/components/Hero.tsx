import { personal, skills } from "@/data/portfolio";
import { ContactIcon, DownloadIcon, GithubIcon, LinkedinIcon } from "./Icons";
import styles from "./Hero.module.css";

const heroSkills = ["Java", "Spring Boot", ".NET Core", "Oracle SQL", "Kafka", "Docker"];

/** A string value in the code window. */
const Str = ({ children }: { children: string }) => (
  <span className={styles.str}>"{children}"</span>
);

export default function Hero() {
  // Only show skills that actually exist in the data file
  const shown = heroSkills.filter((s) => skills.some((k) => k.name === s));

  return (
    <section id="top" className={styles.hero}>
      <div className="glow-blob" style={{ width: 380, height: 380, background: "#7c3aed33", top: -60, left: "-6%" }} />
      <div className="glow-blob" style={{ width: 300, height: 300, background: "#ec489926", top: 160, right: "-4%" }} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Hello,
            <br />
            This is <span className={styles.name}>{personal.name}</span>, I'm a Professional{" "}
            <span className={styles.role}>{personal.designation}</span>.
          </h1>

          <p className={styles.tagline}>{personal.tagline}</p>

          <div className={styles.socials}>
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GithubIcon size={28} />
            </a>
            <a href={personal.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedinIcon size={28} />
            </a>
          </div>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnOutline}>
              <span>Contact me</span>
              <ContactIcon size={16} />
            </a>
            <a href={personal.resume} target="_blank" rel="noreferrer" className={styles.btnFill}>
              <span>Get resume</span>
              <DownloadIcon size={16} />
            </a>
          </div>
        </div>

        <div className={styles.codeWrap}>
          <div className={styles.code} role="img" aria-label={`Code card describing ${personal.name}, ${personal.designation}`}>
            <div className={styles.codeBar}>
              <span className={styles.dots} aria-hidden>
                <i /> <i /> <i />
              </span>
              <span className={styles.file}>developer.ts</span>
            </div>
            <pre aria-hidden>
              <code>
                <span className={styles.kw}>const</span> <span className={styles.var}>developer</span>
                <span className={styles.punc}>:</span> <span className={styles.type}>Developer</span>{" "}
                <span className={styles.punc}>=</span> <span className={styles.punc}>{"{"}</span>
                {"\n"}
                {"  "}<span className={styles.prop}>name</span>: <Str>{personal.name}</Str>,{"\n"}
                {"  "}<span className={styles.prop}>role</span>: <Str>{personal.designation}</Str>,{"\n"}
                {"  "}<span className={styles.prop}>skills</span>: [{"\n"}
                {shown.map((s, i) => (
                  <span key={s}>
                    {"    "}<Str>{s}</Str>
                    {i < shown.length - 1 ? "," : ""}
                    {"\n"}
                  </span>
                ))}
                {"  "}],{"\n"}
                {"  "}<span className={styles.prop}>hardWorker</span>: <span className={styles.bool}>true</span>,{"\n"}
                {"  "}<span className={styles.prop}>quickLearner</span>: <span className={styles.bool}>true</span>,{"\n"}
                {"  "}<span className={styles.prop}>problemSolver</span>: <span className={styles.bool}>true</span>,{"\n"}
                {"  "}<span className={styles.fn}>hireable</span>: () <span className={styles.kw}>=&gt;</span>{" "}
                <span className={styles.bool}>true</span>,{"\n"}
                <span className={styles.punc}>{"}"}</span>;<span className={styles.cursor} />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
