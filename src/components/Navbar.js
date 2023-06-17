import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoMdContact } from 'react-icons/io';
import '../App.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'Categories', text: 'Categories' },
];
const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <span className="title">Bookstore CMS</span>
      <ul className="navList">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className="navLink">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <IoMdContact />
  </nav>
);
export default Navbar;
