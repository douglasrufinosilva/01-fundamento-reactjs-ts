import { Post, PostType } from "./components/Post.tsx"
import { Header } from "./components/Header.tsx"
import { Sidebar } from "./components/Sidebar.tsx"

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/douglasrufinosilva.png',
      name: 'Douglas Rufino',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'douglasrufino-dev.netilify.app' }
    ],
    publishedAt: new Date('2024-07-07 09:10:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/debora.png',
      name: 'Manuelle Gouvea',
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'manu-designer.netilify.app' }
    ],
    publishedAt: new Date('2024-06-07 19:10:00'),
  }

]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map( post => (
              <Post 
                key={post.id}
                post={post}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export { App }