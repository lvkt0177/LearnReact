import { AiFillDiscord, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import React,{useState} from 'react';

export const DeA1 = () => {
    return (
        <h1>De Ali 1 1 1 </h1>
    )
}



export const DeA1_2 = () => {
    return (
        <div className="text-center">
            <h1>Clone</h1>
        </div>
    )
};



export const DeA2 = () => {
    return (
        <h1>De Ali 2 2 2</h1>
    )
}



export const MyName = () => {
    let myName = "Le Thinh";
    return (
        <h1 className="text-danger">Xin chào, {myName}</h1>
    )
};



export const MyWifeWithVariableCss = () => {
    let myWife = "LKA";
    const myWifeCss = {
        color: "white",
        backgroundColor: "black"
    }

    return (
        <h1 className="fs-1" style={myWifeCss}>That's my wife, {myWife} </h1>
    )
}



export const Content = (props) => {
    var { type, text } = props;
    return (
        <div>
            <ul className="" style={{listStyle: "none"}}>
                <li className={type ? "text-danger fs-1" : " fs-1 "}>{type ? <AiFillDiscord/>: " "} Value: {text}</li>
            </ul>
        </div>
    )
};

export const Button_ChangeValue = () => {


    const [value, setValue] = useState(0);
    const [status, setStatus] = useState('');

    const ChangeValue = () => {
        var newValue = value;
        newValue++;
        if (value === 10)
        {
            setValue(0);
            setStatus(true)
        }
        else
        {
            setValue(newValue);
            setStatus(false)
        }

    }
    return (
        <div>
            <div>
                <p className="p_element">
                    {status ? <div className="text-success">Success (<AiOutlineCheck />)</div> : <div className="text-danger">Failure (<AiOutlineClose/>)</div>}
                    
                </p>
                <button onClick={ChangeValue} className="btn btn-success px-5 my-5">Click me</button>
            </div>
        </div>
    )
}
