import style from './Footer.module.css'
function Footer() {
  return (
      <div className={style.footerContainer}>
          <p>We&apos;r open untill 20:00. Come visit us or order online</p>
          <button className={style.button}>Order Now</button>
      </div>
  );
}

export default Footer