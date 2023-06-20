import { NavLink } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import '../App.css';

const links = [
  { path: '/', text: 'Books', exact: true },
  { path: 'Categories', text: 'Categories' },
];
const Navbar = () => (
  <nav className="navbar">
    <ul className="links">
      <li>
        <span className="title">Bookstore CMS</span>
      </li>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path} className="navLink" exact={link.exact}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="icons">
      <IoMdContact title="Contact" />
    </div>
  </nav>
);
export default Navbar;
