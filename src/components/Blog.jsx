import { useRef } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductPage from './ProductPage';
import ProfilePage from "./ProfilePage";


const blog = () => {
    let number = useRef(0);
    const addNumber = () => {
        number.current++;
        console.log(number.current);
    }
    const minusNumber = () => {
        number.current--;
        console.log(number.current);
    }
    return (
        <div>
            <h1>This is Blog Page</h1>
            <button onClick={addNumber}>Add</button>
            <button onClick={minusNumber}>Minus</button>
            <hr/>
        </div>
    );
};

export default blog;