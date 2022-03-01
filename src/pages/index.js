import Head from "next/head";
import Projetos from "../components/Projetos"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sérgio Henrique | Portfólio</title>
        <meta
          name="description"
          content="Sergio Henrique Front End Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projetos />
    </div>
  );
}
