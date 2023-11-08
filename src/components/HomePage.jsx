import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductPage from './ProductPage';
import ProfilePage from "./ProfilePage";
import Menu from '../components/Menu.jsx';

const homePage = () => {
    return (
        <div>
            <h1>This is homePage</h1>
            <br/><br/>
            <BrowserRouter>
                <Routes>
                    <Menu/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default homePage;