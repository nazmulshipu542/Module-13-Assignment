
import {Link} from "react-router-dom"
const menu = () => {
    return (
        <div>
            <ul>
                <li><link to="/product">Product</link></li>
                <li><link to="profile">Profile</link></li>
            </ul>
        </div>
    );
};

export default menu;