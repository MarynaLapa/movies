import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
import '../../index'

function Header() {
  return (
      <header className={style.header}>
        <div className="container">
            <nav className={style.navList}>
                  <img src="./cinema-ico.png" alt="Logo" width={50} height={50} className={style.logo} />
                <ul className={style.list}>
                    <li>
                        <NavLink to="/" className={style.link}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={style.link}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={style.link}>Movies</NavLink>
                    </li>  
                </ul>
            </nav>
        </div>      
      </header>
  )
}

export default Header