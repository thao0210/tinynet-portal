import styles from "../assets/Portal.module.scss";

const modules = [
  
  {
    name: "Videos",
    desc: "Free short videos collection.",
    url: "https://video.tinynet.net",
    active: true
  },
  {
    name: "Flow",
    desc: "Automation and integration made simple and reliable.",
    url: "https://flow.tinynet.net",
    active: true
  },
  {
    name: "Garden",
    desc: "The creative space for writing, drawing, and sharing ideas.",
    url: "https://garden.tinynet.net",
    active: false
  },
  {
    name: "Shield",
    desc: "Monitor, protect, and optimize your systems with ease.",
    url: "https://shield.tinynet.net",
    active: false
  },
  {
    name: "Assistant",
    desc: "A smart assistant powered by AI.",
    url: "#",
    active: false
  },
  {
    name: "Voca Master",
    desc: "A smart vocabulary trainer powered by AI.",
    url: "#",
    active: false
  },
];

export default function Portal() {
  return (
    <div className={styles.portal}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="TinyNet Logo" className={styles.logo} />
        <div className={styles.titleGroup}>
          {/* <h1 className={styles.title}>TinyNet</h1> */}
          <p className={styles.slogan}>A small world of smart creations</p>
        </div>
      </header>

      <main className={styles.grid}>
        {modules.map((m) => (
          <a
            key={m.name}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${!m.active ? styles.disabled : ""}`}
            title={m.active ? "" : "This module is under construction"}
          >
            <h2>{m.name}</h2>
            <p>{m.desc}</p>
            {!m.active && <span className={styles.badge}>Under construction</span>}
          </a>
        ))}
      </main>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} TinyNet — Crafted with passion by <a href="https://www.thaonguyen.net" target="_blank">ThaoNguyen.net</a></small>
      </footer>
    </div>
  );
}
