import { listDevice } from "../../data/device";
import {DeviceItem} from './device';

    
export const ListDevice = () => {
    return (
        <>
            <h1 className="text-center pb-3 my-5 border-bottom border-3 border-dark">List Device</h1>

            <div className="row">
                {
                    listDevice.map((item, index) => {
                        return (
                            <div className="col-4">
                                <DeviceItem item={item} />
                            </div>
                        )
                })}

            </div>
        </>

    )
};
