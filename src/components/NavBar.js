export const NavBar = () => {
  return (
        <>
            <header>
                <nav>
                    <span>
                        ogr
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
                        justify-content: space-between;
                    }
                }
            `}</style>
        </>
  )
}
