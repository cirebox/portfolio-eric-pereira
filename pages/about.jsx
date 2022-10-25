import ButtonCV from '../components/ButtonCV';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <article className={ styles.cointainer }>
      <h1>Um pouco sobre mim</h1>
      <br/>
      <b>Técnico em Informática formado pelo CVT Três Rios e formado em Analise e Desenvolvimento de Sistemas pela Estácio.</b>
      <p>A minha principal ferramenta de trabalho é o Nodejs, apesar de ter conhecimentos sobre desenvolvimento front-end, escolhi me aprofundar no back-end, especialmente no ecossistema do Nodejs.</p>
      <p>No momento estou consolidando conhecimento sobre Nest.js e desenvolvimento com Typescript.</p>
      <h2>Algumas stacks que tenho conhecimento.</h2>
      <section className={ styles.containerSkills }>
        <div className={ styles.skill }>
          <h4><b>Front-end</b></h4>
          <ul>
            <li>HTML5 Semântico</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Flutter</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Context API</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>SASS/SCSS</li>
            <li>Styled Components</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className={ styles.skill }>
          <h4><b>Back-end</b></h4>
          <ul>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Express</li>            
            <li>Nest.js</li>
            <li>Python</li>
            <li>Php</li>    
            <li>Sequelize</li>
            <li>TypeOrm</li>      
            <li>JWT</li>           
            <li>MySQL</li>
            <li>Postgres</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className={ styles.skill }>
          <h4><b>Testes</b></h4>
          <ul>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Sinon</li>
            <li>RTL</li>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>
        </div>
      </section>
      <ButtonCV/>
    </article>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
