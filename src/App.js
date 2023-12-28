import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ContactPage from './components/Contact/ContactPage';
import HomePage from './components/Home/HomePage';
import CheckOutPage from './components/CheckOut/CheckOutPage';
import ProductDetailsPage from './components/ProductDetails/ProductDetailsPage';
import CheckOutSuccessPage from './components/CheckOutSuccess/CheckOutSuccessPage';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="product/:id" element={<ProductDetailsPage />} />
                    <Route path="checkout" element={<CheckOutPage />} />
                    <Route path="success" element={<CheckOutSuccessPage />} />
                </Route>
            </Routes>
        </>
    );
}