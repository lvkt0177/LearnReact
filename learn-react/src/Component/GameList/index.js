import { List } from '../../data/listGame';
import { GameItem } from './game';
export const GameList = () => {
    return (
        <>
            <div className='row list-game'>
                <h1 className='text-center border-bottom border-5 border-dark pb-3'>List Game</h1>
                {List.map(data => {
                    console.log(data.tenGame);
                    return (
                        <div className='col-4'>
                            <GameItem item = {data} />
                        </div>
                    )
                })}
            </div>
        </>

    )
}