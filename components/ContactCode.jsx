import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'WebSite',
    link: 'cirebox.com.br',
    href: 'https://cirebox.com.br',
  },
  {
    social: 'Email',
    link: 'suportecire@gmail.com',
    href: 'mailto:suportecire@gmail.com',
  },
  {
    social: 'GitHub',
    link: '@cirebox',
    href: 'https://github.com/cirebox',
  },
  {
    social: 'Linkedin',
    link: '@cire',
    href: 'https://www.linkedin.com/in/cire/',
  },
  {
    social: 'Instagram',
    link: '@eric_pereira95',
    href: 'https://www.instagram.com/eric_pereira95',
  },
  {
    social: 'Telegram',
    link: '@cirebox',
    href: 'https://t.me/cirebox',
  },
  {
    social: 'Codepen',
    link: '@cirebox',
    href: 'https://codepen.io/cirebox',
  },
  {
    social: 'CodeSandbox',
    link: '@cirebox',
    href: 'https://codesandbox.io/u/cirebox',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
