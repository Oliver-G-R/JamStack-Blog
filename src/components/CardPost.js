import Link from 'next/link'

export const CardPost = ({
  img,
  date,
  title,
  description,
  slug
}) => {
  return (
        <>
            <Link href={`/${slug}`}>
               <a>
                    {img
                      ? <img src={img} alt={title} />
                      : <div className="caratula">{
                            <p>{title}</p>
                        }</div> }
                    <div>
                        <span>{date}</span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
               </a>
            </Link>

            <style jsx>{`
                div{
                    padding: 2rem 0;
                    span{
                        color: var(--description-color);
                    }
                    h3{
                        margin: 1rem 0;
                        color: var(--title-color);
                    }
                    p{
                        color: var(--description-color);

                    }
                }
                .caratula{
                    background-color: rgba(255, 255, 255, 0.425);
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    border-radius: 1rem;
                    align-items: center;
                    padding: 3rem;
                    text-align: center;
                    p{
                        color: var(--description-color);
                        font-weight: 700;
                        font-size: 2.5rem;
                    }
                }    
            `}</style>
        </>
  )
}
