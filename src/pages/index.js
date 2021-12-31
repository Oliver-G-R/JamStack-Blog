import { getAllMDXComponentsMetadata } from 'lib/mdx'

import { CardPost } from 'components/CardPost'
import { GridCardPost } from 'components/GridCardPost'
import { HeadInfo } from 'components/HeadInfo'
import { NavBar } from 'components/NavBar'

import { HomeStyles } from './HomeStyles'
export default function Home ({ posts }) {
  return (
    <>
      <HeadInfo metadata={{
        title: 'JAMSTCK | BLOG',
        description: 'Web development blog'
      }} />
      <NavBar/>
      <div className="global-container">
        <section className="section-welcome spacing-section">
            <article className="section-welcome__course">
              <h1>
                Cursos de React desde $29.99
              </h1>
              <div>

              </div>
            </article>
            <article className="section-welcome__info-course">
              <span>Martes 05 2021</span>
              <h2>
                La herramienta  #1 para el desarrollo Front-end
              </h2>
              <p>
                React es la mejor herramienta para el desarrollo de aplicaciones web.
                Este curso te llevara a traves de una serie de pasos para crear una aplicacion web
                de forma rapida y sencilla.
              </p>
            </article>
        </section>

        <main>
          <GridCardPost title="Últimos post añadidos" >
            {
              posts.map(({ title, date, slug, description, imgCover }, id) => (
                <CardPost
                  key={id}
                  date={date}
                  title={title}
                  description={description}
                  img={imgCover}
                  slug={slug}
                />
              ))
            }
          </GridCardPost>
        </main>
      </div>

      <style jsx>{HomeStyles}</style>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllMDXComponentsMetadata()
  return {
    props: { posts }
  }
}
