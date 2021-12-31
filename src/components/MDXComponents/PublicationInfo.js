export const PublicationInfo = ({
  author = 'Anónimo',
  date
}) => {
  return (
        <>
            <article>
                <p>Por {author}</p>
                <span className="separation">|</span>
                <span>{date}</span>
            </article>

            <style jsx>{`
                article{
                    display: flex;
                    align-items: center;
                    margin: 2rem 0;
                    color: var(--description-color);

                    .separation{
                        margin: 0 2rem;
                    }

                    p{
                        color: var(--title-color);
                        color: #fff;
                        padding: 1rem;
                        border-radius: .5rem;
                        background-color: var(--color-secondary);
                    }

                }
            `}</style>
        </>
  )
}
