import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
} 

function Comments({ content, onDeleteComment }: CommentProps) {

  const [countLike, setCountLike] = useState(0)

  function handleDeleteComment() {
    {onDeleteComment(content)}
  }

  function handleAddNewLike() {
    setCountLike((state) => state + 1)
  }

  const postWasLiked = countLike > 0

  return (
    <>
      <div className={styles.comment}>
        <Avatar 
          hasBorder={false}
          src="http://github.com/douglasrufinosilva.png"
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Douglas Rufino</strong>
                <time
                  title='15 de julho de 2024 às 21:00' dateTime="2024-07-15"
                >
                  Cerca de 1h atrás
                </time>                
              </div>


              <button
                onClick={handleDeleteComment}
                title='Deletar comentário'>
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleAddNewLike}>
              <ThumbsUp
                className={postWasLiked ? styles.postLiked : ''}
              />
              Aplaudir <span>{countLike}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}

export { Comments }