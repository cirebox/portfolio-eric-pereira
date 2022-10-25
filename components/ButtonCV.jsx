import styles from '../styles/ButtonCV.module.css'
const ButtonCV = () => {
  return(
      <button className={styles.container}>
        <a href="https://drive.google.com/uc?export=download&id=1XdUZ20xOZvGOddNT9MzvdZ0glmNR8Q1r" download>
          Baixar Currículo
          <img src="/download.png" alt="Botão para baixar curriculo" />
        </a>
    </button>
  )
}

export default ButtonCV;