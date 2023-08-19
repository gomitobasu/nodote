import styles from './page.module.scss'
import Header from '../components/Header';
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.topPage}>
      <div className={styles.nodoteLogo}></div>
      </div>
      <div className={styles.scroll}><h1>SCROLL</h1></div>
      <div className={styles.about}>
        <div className={styles.aboutTitle}></div>
        <p className={styles.aboutText}>喉から手が出るほど欲しいものを<br/>能動的に生み出すやつを増やす。<br/>捜索から運用まで全部やる能動デザイン会社。</p>
      </div>
      <div className={styles.works}>
        <div className={styles.worksTitle}><h1>works</h1></div>
        <p className={styles.worksText}>喉から手が出るほど欲しいものを<br/>能動的に生み出すやつを増やす。<br/>捜索から運用まで全部やる能動デザイン会社。</p>
      </div>
      <div className={styles.company}>
        <div className={styles.companyTitle}><h1>company</h1></div>
        <p className={styles.worksText}>喉から手が出るほど欲しいものを<br/>能動的に生み出すやつを増やす。<br/>捜索から運用まで全部やる能動デザイン会社。</p>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactTitle}><h1>company</h1></div>
        <p className={styles.contactText}>喉から手が出るほど欲しいものを<br/>能動的に生み出すやつを増やす。<br/>捜索から運用まで全部やる能動デザイン会社。</p>
      </div>
      <footer className={styles.footer}>
        <small className={styles.footerText}>Copyright© nodote All Rights Reserved.</small>
      </footer>
    </main>
  )
}
