export const GridCardPost = ({ children, title = 'Default Section Post Title' }) => {
  return (
        <>
            <section className="spacing-section">
                <h2>{title}</h2>
                <div>
                    {children}
                </div>
            </section>

            <style jsx>{`
                section{
                    h2{
                        margin-bottom: 4rem;
                    }
                    div{
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        grid-gap: 4rem;
                    }
                }
            `}</style>
        </>
  )
}
