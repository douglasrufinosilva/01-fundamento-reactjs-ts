import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-simbol.svg'

function Header() {

  return (
    <>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo Ignite" />
        <strong>Ignite Feed</strong>
      </header>
    </>
  )
}

export { Header }