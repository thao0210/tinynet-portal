import styles from "../assets/Portal.module.scss";

const modules = [
  {
    name: "Card",
    desc: "Create and share personalized greeting or quote cards with images or short videos — all powered by TinyNet.",
    url: "https://card.tinynet.net",
    active: true
  },
  {
    name: "Flow",
    desc: "Automation and integration made simple and reliable.",
    url: "https://flow.tinynet.net",
    active: true
  },
  {
    name: "Story",
    desc: "The creative space for writing, and sharing ideas.",
    url: "https://story.tinynet.net",
    active: false
  },
  {
    name: "Profile",
    desc: "Create and share your professional or personal profile, showcase skills, CV, and achievements.",
    url: "https://profile.tinynet.net",
    active: false
  },
  {
    name: "Shop",
    desc: "Build your mini online store, sell products easily, and receive payments via PayPal or direct transfer.",
    url: "https://shop.tinynet.net",
    active: false
  },
  {
    name: "Challenge",
    desc: "Set up challenges for yourself or others, track progress, compete, and share achievements with the community.",
    url: "https://challenge.tinynet.net",
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
    desc: "Your intelligent AI companion for daily productivity.",
    url: "https://assistant.tinynet.net",
    active: false
  },
//   {
//     name: "Voca Master",
//     desc: "A smart vocabulary trainer powered by AI.",
//     url: "#",
//     active: false
//   },
];

export default function Portal() {
  return (
    <div className={styles.portal}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="TinyNet Logo" className={styles.logo} />
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>TinyNet</h1>
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
