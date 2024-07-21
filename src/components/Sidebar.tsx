import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <div className={styles.profile}>
          <Avatar
            src="https://github.com/douglasrufinosilva.png"
          />         
          <strong>Douglas Rufino</strong>
          <span>Front End Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}

export { Sidebar }