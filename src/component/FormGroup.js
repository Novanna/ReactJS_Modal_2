import React, {useState} from 'react';
import Modal from 'react-modal';
import ModalCard from './ModalCard';
import './FormGroup.css'

let formElements = [
    {
        key: 'uname',
        label: 'Name',
        placeholder: "Type your full name here"
    },
    {
        key: 'ujob',
        label: 'Job',
        placeholder: "Type your current job here"
    },
    {
        key: 'udom',
        label: 'Domicile',
        placeholder: "Type your domicile (city) here"
    },
    {
        key: 'uphone',
        label: 'Phone Number',
        placeholder: "+(62)"
    },
    {
        key: 'ugit',
        label: 'GitHub',
        placeholder: "github.com/"
    },
    {
        key: 'uemail',
        label: 'Email',
        placeholder: 'youremail@bla.com'
    }
]

function FormGroup(){
    const [formData, setFormData] = useState([{}]);

    const handleChange = (value, key) => {
        setFormData(formData => ({...formData, ...{ [key]: value }}));
        //ini yang ditaroh di submit sama imam
    }

    const [selectedImg, setSelectedImg] = useState("");

    const addImgHandler = (e) => {
        let src = URL.createObjectURL(e.target.files[0]);
        setSelectedImg(src);
    }

    //modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //Const itu Arrow component
    const setModalIsOpenToTrue =()=> {
        setModalIsOpen(true)
        console.log(formData);
    }

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

    const submitHandler = (e) => {
        e.preventDefault();
        setModalIsOpen(true);
        setFormData([...formData[e], {formData}]);
    }

    const closeHandler = () => {
        setModalIsOpen(false)
    }

    return(
        <div className='card'>
            <form id='form-group' onSubmit={submitHandler}>
                {formElements.map(formElement =>{
                return <div key={formElement.key}> 
                    <div className='form-label'>
                        {formElement.label}
                    </div>
                    <input 
                    className='form-input'
                    placeholder={formElement.placeholder}
                    onChange={(e) =>{
                        handleChange(e.target.value, formElement.key)
                        }}
                    />
                </div>
                })}
                
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
                        setModalIsOpenToTrue() }}
                >Process</button>

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
                            >
                                close
                            </button>
                            <ModalCard
                                //data = {FormData}
                                userName = {formData["uname"]}
                                userJob = {formData["ujob"]}
                                userDom = {formData["udom"]}
                                userPhoto = {selectedImg}
                                userPhone = {formData["uphone"]}
                                userGit = {formData["ugit"]}
                                userEmail = {formData["uemail"]}
                            />
                    </Modal>
                </div>
            </form>
        </div>
    )
}
export default FormGroup;