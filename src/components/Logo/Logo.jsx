import { NavLink } from 'react-router-dom';
import css from './Logo.module.css'

export const Logo = ({children}) => {
    return (
        <NavLink className={css.link} to="/">
            {children}
        </NavLink>
    )
}