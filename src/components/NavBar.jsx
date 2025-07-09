import { NavLink } from 'react-router'
import frontRoutes from '../routes/frontRoutes'
function Navbar() {
    return (
        <nav className='displayFlex'>
            <NavLink
                to={frontRoutes.pages.home}
                end
                className={({ isActive }) => (isActive ? 'activeBorder ml1' : 'ml1')}
            >
                Головна
            </NavLink>
            <NavLink
                to={frontRoutes.pages.products.index}
                className={({ isActive }) => (isActive ? 'activeBorder ml1' : 'ml1')}
            >
                Магазин
            </NavLink>
            <NavLink
                to={frontRoutes.pages.rules}
                className={({ isActive }) => (isActive ? 'activeBorder ml1' : 'ml1')}
            >
                Правила Оплати
            </NavLink>
            <NavLink
                to={frontRoutes.pages.contacts}
                className={({ isActive }) => (isActive ? 'activeBorder ml1' : 'ml1')}
            >
                Контакти
            </NavLink>
        </nav>
    )
}
export default Navbar