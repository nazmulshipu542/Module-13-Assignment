import { useRef } from "react";

const project = () => {
    let myHeadLine = useRef();
    const newHeadLine = () => {
        myHeadLine.current.classList('text-success');
        myHeadLine.current.classList('text-danger');
    }
    return (
        <div>
            <h1>This is Project Page</h1>
            <h3 className="text-success" ref={myHeadLine}>this is Head line</h3>
            <button onClick={newHeadLine}>Change</button>
            <br/><br/>
            
            <hr/>
        </div>
    );
};

export default project;