import { MenuHeader } from '../Menu/index';
import {LogoShop} from '../Logo/index';



export const BoxLogin = () => {
    const isLogin = false;
    return (
        <div className="text-end my-4">
            {isLogin ?
                (
                    <div className="mt-5">
                        <button className="btn btn-dark text-light">Log In</button>
                    </div>
                )
                :
                (
                    <div className="d-flex">
                        <div className="d-inline">
                            <img src="https://i.pinimg.com/736x/17/e6/8b/17e68b6384e43d352fcafd1d42433ccb.jpg" style={{ width: "70px",borderRadius:'50%' }} />
                        </div>
                        <div className="my-2">
                            <button className=" btn text-danger  border-bottom ">Log Out</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
};


export const Header = () => {
    return (
        <div className='container mb-5 my-5 bg-light py-4 '>
            <div className="text-dark text-center d-flex justify-content-between">
                <LogoShop/>
                <MenuHeader />
                <BoxLogin/>
            </div>
        </div>
    )
}
