import { GameList } from '../GameList/index';
import {ListDevice} from '../DeviceList/index';

export const Body = () => {
    return (
        <>
            <div className="container">
                <GameList />
                <ListDevice />
            </div>
        </>
    )
}