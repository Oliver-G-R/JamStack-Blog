export const Heading = ({
  hd,
  children
}) => {
  const heading = {
    h1: <h1>{children}</h1>,
    h2: <h2>{children}</h2>,
    h3: <h3>{children}</h3>,
    h4: <h4>{children}</h4>,
    h5: <h5>{children}</h5>,
    h6: <h6>{children}</h6>
  }
  return (
        <>
            {heading[hd] || heading.h1}
            <style jsx global>{`
                h1, h2, h3, h4, h5, h6{
                    color: var(--title-color);
                    margin: 1.5rem 0;
                }
            `}</style>
        </>
  )
}
