import Link from 'next/link'

export const NavBar = () => {
  return (
        <>
            <header>
                <nav>
                    <span>
                        O
                    </span>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <style jsx>{`
                header{
                    position: fixed;
                    z-index: 3;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: var(--bg-primary);

                    nav{
                        display: flex;
                        padding: 1rem 4rem;
                        align-items: center;
                        justify-content: space-between;

                        ul{
                            display: flex;
                            gap: 2rem;
                            li a{
                                color: var(--description-color);
                                font-size: 1.8rem;
                                font-weight: 700;
                            }
                        }
                    }

                    nav span{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: var(--bg-gradient);
                        color: #fff;
                        width: 3rem;
                        height: 3rem;
                        font-weight: 700;

                        font-size: 2.5rem;
                        padding: 2.5rem;
                        border-radius: 50%;
                    }
                }
            `}</style>
        </>
  )
}
