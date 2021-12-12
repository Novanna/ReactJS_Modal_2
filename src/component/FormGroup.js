import React, {useState} from 'react';
import Modal from 'react-modal';
import ModalCard from './ModalCard';
import './FormGroup.css'

let formElements = [
    {
        key: '1',
        name: 'uname',
        label: 'Name',
        placeholder: "Type your full name here"
    },
    {
        key: '2',
        name: 'ujob',
        label: 'Job',
        placeholder: "Type your current job here"
    },
    {
        key: '3',
        name: 'udom',
        label: 'Domicile',
        placeholder: "Type your domicile (city) here"
    },
    {
        key: '4',
        name: 'uphone',
        label: 'Phone Number',
        placeholder: "+(62)"
    },
    {
        key: '5',
        name: 'ugit',
        label: 'GitHub',
        placeholder: "github.com/"
    },
    {
        key: '6',
        name: 'uemail',
        label: 'Email',
        placeholder: 'youremail@bla.com'
    }
]

// let listData = []
function FormGroup(){
    // const [formData, setFormData] = useState([{}]);
    const [formData, setFormData] = useState([]);
    const [listData, setListData] = useState([]);
    // const [listData, setListData] = useState([{uname: 'Novanna', ujob:'developer'}, {uname: 'Jungkook', ujob:'artist'}]);

    // const handleChange = (value, key) => {
    //     // setFormData(formData => ({...formData, [key]: value }
    //     // ));
    //     setFormData (formData => ({...formData, [key]: value}))
    //     //ini yang ditaroh di submit sama imam 
    // }

    const handleChange = (value, name) => {
        setFormData({
            ...formData, [name]: value,
        })
    }

    const [selectedImg, setSelectedImg] = useState("");

    const addImgHandler = (e) => {
        let src = URL.createObjectURL(e.target.files[0]);
        setSelectedImg(src);
    }

    const submitHandler = () => {
        setModalIsOpen(true)
        setListData([
            ...listData, [formData.uname, formData.ujob, selectedImg, formData.udom, formData.uphone, formData.uemail, formData.ugit]
        ])
        console.log(formData);
        console.log(listData);
        // props.onSubmitData(formData);
    }

    //modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //Const itu Arrow component
    // const setModalIsOpenToTrue =()=> {
    //     setModalIsOpen(true)
    //     console.log(formData);
    //     console.log(setFormData.length);
    // }

    // const setModalIsOpenToFalse =()=> {
    //     setModalIsOpen(false)
    // }

    const modalStyle = {
        content : {
            top: '40%',
            left: '30%',
            transform: 'translate(-20%, -40%)'
        }
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     this.setState(prevState =>{
    //         setModalIsOpen(true);
    //         return{
    //             count: prevState.count + 1,
    //             setFormData([formData, {
    //                         "username": userName,
    //                         "userjob": userJob,
    //                         "userdom": userDom,
    //                         "userphoto": userPhoto,
    //                         "useremail": userEmail,
    //                         "userphone": userPhone,
    //                         "usergit": userGit }
    //                     ])}
    //     })
    // }

    // const submitHandler = () => {
    //     this.setState(prevState => ({
    //         formData: [...prevState.formData, formData]
    //     }))
    // }

    const closeHandler = () => {
        setModalIsOpen(false)
    }
    // const dataLength = props.data.length;

    return(
        <div className='card'>
            {/* <form id='form-group' onSubmit={submitHandler}> */}
            <form id='form-group'>
                {formElements.map(formElement => (
                    <div key={formElement.key}> 
                        <div className='form-label'> {formElement.label} </div>
                        <input 
                            className='form-input'
                            placeholder={formElement.placeholder}
                            name={formElement.name}
                            onChange={(e) =>{
                                handleChange(e.target.value, formElement.name)
                            }}
                        />
                    </div>
                ))}
                
                <p className="form-label">
                    Photo
                </p>
                <input 
                    type="file" 
                    className="form-file"
                    onChange={addImgHandler}
                />

                <button
                    className="btn"
                    onClick= { (e) => {e.preventDefault();
                        submitHandler() }}
                > Process </button>
                {/* <button
                    className="btn"
                    onClick= { (e) => {e.preventDefault();
                        setModalIsOpenToTrue() }}
                > Process </button> */}
            </form>
                
                {/* {listData.map (data => {
                    return <div key={data.uname}>
                        <ModalCard 
                            userName = {data.uname}
                        />
                    </div>
                })} */}


                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        style={modalStyle}
                        ariaHideApp={false}
                        onRequestClose={() => setModalIsOpen(true)}
                    >
                        <button 
                                className="btn-close" 
                                onClick={closeHandler}
                        > close </button>
                        {
                            listData.map((user) => (
                                <ModalCard 
                                    userName = {user.uname}
                                    userJob = {user.ujob}
                                    userDom = {user.udom}
                                    userPhoto = {user.uphoto}
                                    userPhone = {user.uphone}
                                    userGit = {user.ugit}
                                    userEmail = {user.uemail}
                                />
                            ))
                        }
                    </Modal>
                </div>
                {/* Modal 1 */}
                {/* <div>
                    <Modal
                    isOpen={modalIsOpen}
                    style={modalStyle}
                    ariaHideApp={false}
                    onRequestClose={() => setModalIsOpen(true)}
                    >
                            <button 
                                className="btn-close" 
                                onClick={closeHandler}
                            >
                                close
                            </button>
                            {/* { listData.map (listData => { */}
                                {/* return <div key={listData.length}> */}
                                    {/* <ModalCard
                                        userName = {formData["uname"]}
                                        userJob = {formData["ujob"]}
                                        userDom = {formData["udom"]}
                                        userPhoto = {selectedImg}
                                        userPhone = {formData["uphone"]}
                                        userGit = {formData["ugit"]}
                                        userEmail = {formData["uemail"]}
                                    /> */}
                                {/* </div> */}
                            {/* })} */}
                    {/* </Modal> */}
                {/* </div> */}
        </div>
    )
}
export default FormGroup;