import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header({ isLoggedIn, logoutUserFunction }) {
  return (
    <header className={styles.HeaderWrapper}>
      <div className={styles.TitleWrapper}>
        <div>
          <h1>Users & Auth</h1>
        </div>
      </div>
      <nav>
        <div className={styles.NavWrapper}>
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a onClick={logoutUserFunction}>Log out</a>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/create">Create user</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
