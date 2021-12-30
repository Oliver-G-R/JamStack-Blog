export const NavBar = () => {
  return (
        <>
            <header>
                <nav>
                    <span>
                        Ogr
                    </span>
                    <ul>
                        <li>
                            <a href="">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
                            </a>
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
                        padding: 2rem 4rem;
                        align-items: center;
                        justify-content: space-between;

                        ul{
                            display: flex;
                            gap: 2rem;
                            li a{
                                color: var(--description-color);
                                font-size: 1.8rem;
                                font-weight: 500;
                            }
                        }


                    }

                    nav span{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: var(--bg-gradient);
                        color: #fff;
                        width: 4rem;
                        font-weight: 300;
                        font-size: 2rem;
                        padding: 2.4rem;
                        height: 4rem;
                        border-radius: 50%;
                    }

                    
                }
            `}</style>
        </>
  )
}
