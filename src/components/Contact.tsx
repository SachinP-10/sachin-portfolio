import { useState, type ChangeEvent, type FormEvent } from "react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon, SendIcon } from "./Icons";
import styles from "./Contact.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: "", email: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!emailPattern.test(form.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (form.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

/** Formats +918105429531 as +91 81054 29531 for display. */
const prettyPhone = (p: string) => p.replace(/^(\+\d{2})(\d{5})(\d{5})$/, "$1 $2 $3");

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  // No backend needed: opens the visitor's email app with the message filled in.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(empty);
  };

  return (
    <section id="contact" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Contact with me</h2>
          <p className={styles.lead}>
            If you have any questions or a role that fits my skills, I'm open to any opportunity.
          </p>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <Field label="Your name" name="name" value={form.name} error={errors.name} onChange={onChange} autoComplete="name" />
            <Field label="Your email" name="email" type="email" value={form.email} error={errors.email} onChange={onChange} autoComplete="email" />
            <Field label="Your message" name="message" value={form.message} error={errors.message} onChange={onChange} multiline />

            <button type="submit" className={styles.submit}>
              <span>Send message</span>
              <SendIcon size={16} />
            </button>
            {sent && (
              <p className={styles.sent} role="status">
                Your email app should open with the message ready to send. If it doesn't, email me at {personal.email}.
              </p>
            )}
          </form>
        </div>

        <div className={styles.info}>
          <ul className={styles.details}>
            <li>
              <a href={`mailto:${personal.email}`}>
                <span className={styles.badge}><MailIcon size={18} /></span>
                {personal.email}
              </a>
            </li>
            <li>
              <a href={`tel:${personal.phone}`}>
                <span className={styles.badge}><PhoneIcon size={18} /></span>
                {prettyPhone(personal.phone)}
              </a>
            </li>
            <li>
              <span className={styles.static}>
                <span className={styles.badge}><LocationIcon size={18} /></span>
                {personal.address}
              </span>
            </li>
          </ul>

          <div className={styles.socials}>
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GithubIcon size={24} />
            </a>
            <a href={personal.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: keyof FormState;
  value: string;
  error?: string;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Field({ label, name, value, error, type = "text", multiline, autoComplete, onChange }: FieldProps) {
  const id = `contact-${name}`;
  const errId = `${id}-error`;
  const shared = {
    id,
    name,
    value,
    onChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errId : undefined,
    className: styles.input,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea {...shared} rows={5} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error && (
        <p id={errId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
