// import React, { useEffect } from 'react';
import ModalCard from './ModalCard';
import './ModalCard.css';

function ModalData(props){
    // useEffect(() => {
    //     console.log(props.data)
    // }, [props.data])
return(
    <>
    <div>
        {props.data.map(user => (
            <div key={user.key}>
                <ModalCard 
                    //key = {user.length}
                    userName = {user.uname}
                    userJob = {user.job}
                    userDom = {user.domicile}
                    userPhone = {user.phone}
                    userEmail = {user.email}
                    userGit = {user.git}
                    userPhoto = {user.photo}
                />
            </div>
        ))}
    </div>
    </>
)
}
export default ModalData;