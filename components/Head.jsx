import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Desenvolvedor FullStack. Técnico em Informática formado pelo CVT Três Rios e formado em Analise e Desenvolvimento de Sistemas pela Estácio."
      />
      <meta
        name="keywords"
        content="Eric Pereira, web developer portfolio, eric pereira web developer, eric pereira, desenvolvedor web, eric pereira portfolio, portfolio de programador, portfolio de desenvolvedor, portfolio fullstack, programdor freelancer"
      />
      <meta property="og:title" content="Eric Pereira Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://eric-pereira-portifolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
