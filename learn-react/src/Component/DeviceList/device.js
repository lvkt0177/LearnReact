export const DeviceItem = (props) => {

    const { item } = props;


    return (
        <>
            <div className="box shadow mt-3" style={{borderRadius: '5%'}} key={item.ID}>
                <img src={`/image/imageProduct/${item.HINHANH}`} alt="" style={{ width: '400px',height:'250px' }} />

                <div className="info p-4">
                    <p className="text-dark fs-5">{item.TENSP}</p>
                    <p className="text-dark fs-5">{item.NSX}</p>
                    <p className="text-danger">${item.GIATIEN}</p>

                    <div>
                        <button className="text-light btn btn-danger px-4 mt-4">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )

};
