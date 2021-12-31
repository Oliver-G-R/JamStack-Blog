import { HeadInfo } from 'components/HeadInfo'
import { NavBar } from 'components/NavBar'

export const LayoutPost = ({ children, metadata }) => {
  return (
        <>
            <NavBar/>
            <HeadInfo metadata={metadata} />
            <main className="global-container">
                {
                    children
                }
            </main>

            <style jsx>{`
                main{
                    margin-top: 10rem;
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 3rem;
                }
            `}</style>
        </>
  )
}
