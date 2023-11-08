import { useRef } from "react";
import { useEffect } from "react";

const home = () => {

    let myHeadLine = useRef();
    let myList = useRef();
    const change = () => {
        myHeadLine.current.innerText = "Hello, I used useRef in react."
    }
    
    const record = () => {
        myList.current.innerHTML = "<ul><li>Hello</li><li>World</li></ul>";
    }
    
    useEffect(()=>{
        console.log("hello world");
    }, [5])

    return (
        <div>
            <h1>This is Home Page</h1>
            <h3 ref={myHeadLine}></h3>
            <button onClick={change}>click</button>
            <h3 ref={myList}></h3>
            <button onClick={record}>click</button>
            <hr/>
        </div>
    );
};

export default home;