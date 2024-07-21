import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comments } from './Comments'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

function Post({ post }: PostProps) {

  const [comments, setComments] = useState([
    'post muito bacana, hein?'
  ])

  const [newCommentText, setNewCommentText] = useState("")

  const publishedAtDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, 
      {
        locale: ptBR,
        addSuffix: true,
      }
    )

    function handleCreateNewComment(e: FormEvent) {
      e.preventDefault()

      setComments([...comments, newCommentText])
      setNewCommentText("")
    }

    function handleNewComment (e: ChangeEvent<HTMLTextAreaElement>) {
      e.target.setCustomValidity("")
      setNewCommentText(e.target.value)
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
      e.target.setCustomValidity("Esse campo é obrigatório!")
    }

    function deleteComment(deletedComment: string) {
      const updatedComments = comments.filter(comment => comment !== deletedComment)
      setComments(updatedComments)
    }

    const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article
      className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder={true}
            src={post.author.avatarUrl}  
          />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtDateFormatted} dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          post.content.map( line => {
            if (line.type == 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type == 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="inputComment"
          value={newCommentText}
          placeholder='Deixe um comentário.'
          onChange={handleNewComment}
          onInvalid={handleNewCommentInvalid}
          required
        />


        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
      {
        comments.map( comment => {
          return <Comments
                    key={comment}
                    content={comment}
                    onDeleteComment={deleteComment}
                  />
        })
        }
      </div>
    </article>
  )
}

export { Post }