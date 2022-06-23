import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        Habit Tracker
      </div>
    </nav>
  )
}
