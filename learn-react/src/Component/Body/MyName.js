export const MyName = () => {
    let myName = "Le Thinh";
    return (
        <h1 className="text-danger">Xin chào, {myName}</h1>
    )
};


export const MyWifeWithVariableCss = () => {
    let myWife = "De Ali";
    const myWifeCss = {
        color: "white",
        backgroundColor: "black"
    }

    return (
        <h1 className="fs-1" style={myWifeCss}>That's my wife, {myWife} </h1>
    )
}