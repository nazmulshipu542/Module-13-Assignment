import { useRef, useEffect, useState } from "react";


const service = () => {
    let pic = useRef();
    const newPic=()=>{
        pic.current.src="https://placehold.co/600x400?text=Hello\nWorld";
        pic.current.setAttribute("height", "300px");
        pic.current.setAttribute("width", "200px");
    }

    let {data, setData} = useState();
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res=>res.json())
        .then(json=>setData(json))
    }, [])
    return (
        <div>
            <h1>This is Service Page.</h1>
            <img  ref={pic} src="https://placehold.co/600x400"></img>
            <button onClick={newPic}>submit</button>
            <br/><br/>
            {JSON.stringify(data)}
            <hr/>
        </div>
    );
};

export default service;