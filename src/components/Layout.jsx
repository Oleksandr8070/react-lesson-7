import { Outlet } from 'react-router'
import Navbar from './NavBar'
function Layout() {
    return (
        <div>
            <header>
                <div
                    className='header__container'
                >
                    <Navbar />
                </div>
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout

