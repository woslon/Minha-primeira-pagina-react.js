import Head from "next/head";
import estilo from "@/styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>Minha primeira pagina em react</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={estilo.container} >
        <header className={estilo.secao_titulo} >
          <h1>React JS</h1>
          <p>Biblioteca JavaScript para criar SPAs</p>
          <a href="https://reactjs.org/">Site Oficial</a>
        </header>

        <main className={estilo.conteudo_principal} >

          <section className={estilo.secao_requisitos}>
          <div>
          <h3>Requisitos</h3>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
          </div>
          <div className={estilo.container_cards}>
          <div>
            <h3>HTML</h3>
            <p>Aprender a estruturar os elementos da página com HTML CSS</p>
          </div>
          <div>
            <h3>CSS</h3>
            <p>Aprender a estilizar os elementos da página com CSS</p>
          </div>
          <div>
          <h3>JavaScript</h3>
          <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
          </div>
          </div>
          </section>
        </main>
        <footer >
          <p>Desenvolvido por Dev-woslon</p>
        </footer>
      </div>
    </>
  );
}
