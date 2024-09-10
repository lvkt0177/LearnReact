export const  MenuHeader = () => {
    const arrayMenu = ["Home", "Product", "Contact"];

    return (
        <>
            <div className="d-flex ms-5 mt-5" style={{ marginTop: '15px' }}>
                {arrayMenu.map((item, index) => {
                    return (
                        <div className="mt-3 nav-menu" key={index}><a href="" className="navbar-brand text-dark mx-4">{item}</a></div>
                    )
                })}
            </div>
        </>
    )
}




