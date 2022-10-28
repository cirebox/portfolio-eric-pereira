import styles from '../styles/ButtonCV.module.css'
const ButtonCV = () => {
  return(
      <button className={styles.container}>
        <a href="https://drive.google.com/uc?export=download&id=1hUh6hbPBl9COu56x8oAQX0rMzpm286Bn" download>
          Baixar Currículo
          <img src="/download.png" alt="Botão para baixar curriculo" />
        </a>
    </button>
  )
}

export default ButtonCV;