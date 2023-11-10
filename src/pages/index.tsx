import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

type Categoria = {
  id: number,
  name: string
}

export const getServerSideProps = (async (context) => {
  const res = await fetch('https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/categorias.json')
  const categorias = await res.json()
  return { props: {categorias} }
}) satisfies GetServerSideProps<{ categorias: Categoria }>

export default function cardapio({categorias}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Cardapio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {categorias.map((categoria:Categoria) => {return (
            <Link className={styles.categoria} href={`/categorias/${categoria.id}`}>
              <div className={styles.caixa}>
                <h2>{categoria.name}</h2>
              </div>
            </Link>
        )})}
      </main>
    </>
  )
}
