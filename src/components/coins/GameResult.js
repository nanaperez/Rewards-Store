import React, { useContext, useEffect } from 'react'
import Modal from 'react-modal';
import { postPointsFilter } from '../../helpers/postPointsFilter';
import { ContextValues } from '../context/Context';
import { getProdUser } from '../../helpers/getProdUser';
 
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

export const GameResult = ({total, setStartGame}) => {

    const {setUser} = useContext(ContextValues)

    setTimeout(() => {
        setStartGame(false)
        setTimeout(() => {
            getProdUser("user")
                .then( userInfo => setUser(userInfo))
        }, 1000); 
    }, 5000);

    useEffect(() => {
        if(total !== 0){
            postPointsFilter(total)
        } 
    }, [total])

    return (
        <div>
            {
                (total > 0)
                ?<div className="result-div">
                    <Modal
                        isOpen={true}
                        style={customStyles}>
                    <h1>Congratulations you added {total} points</h1>
                    </Modal>
                </div>
                :<div className="result-div">
                    <Modal
                        isOpen={true}
                        style={customStyles}>
                    <h1>You have not added coins, try it next week</h1>
                    </Modal>
                </div>
            }
        </div>
    )
}