export const GameItem = (props) => {
    const { item } = props;
    return (
        <>
                <div className="box shadow my-5" style={{ marginRight: '10px',borderRadius: '5%' }} key={item.ID}>
                        <img src={`/image/imageGame/${item.hinhNen}`} alt={`${item.tenGame}`} style={{ width: '400px',height: '250px',borderRadius:'5%'}} />
                    <div className="info mt-4 p-3 list-game">
                        <h4 className="text-dark">{item.tenGame}</h4>
                        <p className="text-dark fs-4">Type: {item.theLoai}</p>
                        <p className="text-danger">${item.gia}</p>
                        
                        <div>
                            <button className="btn btn-danger my-4  px-4">Buy</button>
                        </div> 
                    </div>
            
                </div>
        </>
    )
};
