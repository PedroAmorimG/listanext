import styles from '@/styles/categorias.module.css'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'

type Item = {
    name: string,
    descricao: string,
    ingredientes: string[],
    preco: string
}


export const getServerSideProps = (async (context) => {
    const {id} = context.query
    const res = await fetch(`https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/produtos/${id}.json`)
    const itens = await res.json()
    return { props: {itens} }
}) satisfies GetServerSideProps<{ itens: Item }>

export default function cardapio_categoria({itens}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [carrinho, setCarrinho] = useState(0)

    return (
        <div className={styles.main}>
            <div className={styles.divcar}><p className={styles.carrinho}>Carrinho: R$ {carrinho}</p></div>
            {itens.map((item:Item) => {
                return (<div className={styles.card}>
                    <h2 className={styles.nome}>{item.name}</h2>
                    <p className={styles.preco}>R$ {item.preco}</p>
                    <button className={styles.add} onClick={() => setCarrinho(carrinho + parseInt(item.preco))}>+</button>
                    <p className={styles.descricao}>{item.descricao}</p>
                    <div className={styles.ingredientes}>
                    {item.ingredientes.map((ingrediente:string) => {
                        return (<p className={styles.ingrediente}>{ingrediente}</p>)
                    })}
                    </div>
                </div>)
            })}
        </div>
    )
}