import { useRef } from "react";

const about = () => {
    let firstName = useRef();
    let lastName = useRef();
    const fullname = () => {
        let fName = firstName.current.value;
        let lNAme = lastName.current.value;
        alert(fName + " " + lNAme);
    }
    return (
        <div>
            <h1>This is About Page</h1>
            <input ref={firstName} placeholder="first name"></input>
            <br/>
            <input ref={lastName} placeholder="last name"></input>
            <br/>
            <button onClick={fullname}>submit</button>
            <hr/>
        </div>
    );
};

export default about;