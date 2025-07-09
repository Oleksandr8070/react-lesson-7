import { Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ProductList from '../pages/products/ProductList';
import RulesPay from '../pages/RulesPay';
import { lazy, Suspense } from 'react';
import frontRoutes from './frontRoutes';
import Contacts from '../pages/Contacts';

const About = lazy(() => import('../pages/Contacts'));

function AppRoutes() {
    return (
        <Routes>
            <Route path={frontRoutes.pages.home} element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path={frontRoutes.pages.about}
                    element={
                        <Suspense fallback={<div>Завантаження...</div>}>
                        <About />
                        </Suspense>
            }
            />
            <Route path={frontRoutes.pages.products.index}>
                <Route index element={<ProductList />} />
            </Route>
            <Route path={frontRoutes.pages.rules}>
                <Route index element={<RulesPay />} />
            </Route>
                <Route path={frontRoutes.pages.contacts}>
                <Route index element={<Contacts />} />
            </Route>
        </Route>
        </Routes>
    );
}

export default AppRoutes;
