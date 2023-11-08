import { useRef, useEffect, useState } from "react";

const contact = () => {
    let APIData = useRef(null);
    let myPTag = useRef();
    const fetchData = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        APIData.current = await response.json();
    }
    const showData =()=>{
        myPTag.current.innerText = JSON.stringify(APIData.current);
    }
    let[data, setData] = useState();
    useEffect(()=>{
        (async()=>{
            let response = await fetch("https://dummyjson.com/products")
            let json = await response.json();
            setData(json);
        })()  
    })
    return (
        <div>
            <h1>this is Contact Page</h1>
            <br/>
            <p ref={myPTag}></p>
            <button onClick={fetchData}>call API</button>
            <button onClick={showData}>show Data</button>
            <br/><br/>
            {JSON.stringify(data)}
        </div>
    );
};

export default contact;