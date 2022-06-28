import styles from './navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href='/'>
          <a>Note-a-habit</a>
        </Link>
        <div>
          <ul>
            <li>
              <Link href='/habits'>
                <a>My Habits</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Profile</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
