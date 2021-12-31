export const ImgPortada = ({ src, alt }) => {
  return (
        <>
            <img src={src} alt={alt} />
            <style jsx>{`
                img{
                    width: 100%;
                    border-radius: 1rem;
                    margin-bottom: 4rem;
                    box-shadow:0 1rem 3rem rgba(0, 0, 0, 0.507);
                }    
            `}</style>
        </>
  )
}
