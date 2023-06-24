import { NavLink } from 'react-router-dom';
// import { IoMdContact } from 'react-icons/io';
// import { ImUser } from 'react-icons/ImUser'
import { ImUser } from '@react-icons/all-files/im/ImUser';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Books', exact: true },
  { path: 'Categories', text: 'Categories' },
];
const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.links}>
      <span className={styles.title}>Bookstore CMS</span>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className={styles.navLink}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className="profile">
      <ImUser className={styles.icon} />
    </div>
  </nav>
);
export default Navbar;
