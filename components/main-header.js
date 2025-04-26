import Image from 'next/image';
import styles from './main-header.module.css';
import Link from "next/link";
import logoImg from '@/assets/logo.png';
export default function MainHeader() {
 return (
   <header className={styles.header}>
     <Link className={styles.logo} href="/">
       <Image
         src={logoImg}
         alt="A plate with food on it"
       />
       NextLevel Food
     </Link>
     <nav className={styles.nav}>
       <ul>
         <li>
           <Link href="/meals">Browse Meals</Link>
         </li>
         <li>
           <Link href="/community">Foodies Community</Link>
         </li>
       </ul>
     </nav>
   </header>
 );
}