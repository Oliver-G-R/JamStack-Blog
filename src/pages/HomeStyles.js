import css from 'styled-jsx/css'

export const HomeStyles = css`
    .section-welcome{
        margin-top: 10rem;
        display: flex;
        justify-content: center;
        gap: 4rem;
        article{
            width: 98rem;
        }
        &__course{
        h1{
            font-size: 7rem;
            margin-bottom: 2rem;
        }
        div{
            width: 100%;
            height: 500px;
            border-radius: 1rem;
            background-image: var(--bg-gradient);
        }
        }

        &__info-course{
        span{
            color: var(--description-color);
            font-size: 1.8rem;
        }
        h2{
            font-size: 8rem;
            margin: 1rem 0;
        }

        p{
            font-size: 3rem;
            color: var(--description-color);
        }
        }

    }

    @media (max-width: 796px){
        .section-welcome{
        &__info-course{
            h2{
            font-size: 3.5rem;
            }
            p{
            font-size: 2rem;
            }
        }

        &__course{
            h1{
            font-size: 3.5rem;
            }
        }
        }
    }

    @media (max-width: 1055px){
        .section-welcome{
        flex-wrap: wrap-reverse;

        &__course{
            text-align: center;
        }
        }
    }
`
