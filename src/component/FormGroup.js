import React, {useState} from 'react';
import Modal from 'react-modal';
//import ModalCard from '../component/ModalCard';
import ModalData from '../component/ModalData';
import './FormGroup.css';

function FormGroup(){

    const [formData, setFormData] = useState([])

    const data = {
        uname:"",
        job:"",
        domicile:"",
        phone:"",
        email:"",
        git:"",
        photo:"",
    }

    const [{uname,job,domicile,phone,email,git,photo}, 
        setData] = useState(data);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(formData => ({...formData, [name]: value}))
    }
    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setData({...formData, [name]: value})
    // }
    // TRY TRY
    // Kalau formData => dihilangkan, modal cuma mengoper data dari element terakhir yaitu foto
    // yang lainnya, sebelum foto, itu jadi undefined
    // so formData => ini akan collect semua value dari semua element di const data

    const addImgHandler = (e) => {
        let src = URL.createObjectURL(e.target.files[0])
        setData(formData => ({...formData, [e.target.name]: src}))
    }
    // const addImgHandler = (e) => {
    //     let src = URL.createObjectURL(e.target.files[0])
    //     setData({...formData, [e.target.name]: src})
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormData([...formData, {
            "key": formData.length + 1, ///Each child in a list should have a unique "key" prop.
            "uname": uname,
            "job": job,
            "domicile": domicile,
            "phone": phone,
            "email": email,
            "git": git,
            "photo": photo,
        }])
        setData({
            uname:"",
            job:"",
            domicile:"",
            phone:"",
            email:"",
            git:"",
            photo:""
        })
        setModalIsOpen(true)
        console.log(formData)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalStyle = {
        content : {
            top: '2%',
            left: '30%',
            transform: 'translate(-20%, 5%)'
        }
    }

    const closeHandler = () => {
        setModalIsOpen(false)
    }

    const resetHandler = (e) => {
        e.preventDefault();
        setFormData([])
        setData({
            uname: '',
            job: '',
            domicile: '',
            phone:'',
            email:'',
            git:'',
            photo:'',
        })
        alert('Reset Modal Success!')
    }

    return(
        <>
        <div className='card'>
            <form className='form-group'>
                <div className='form-label'>Name</div>
                <input
                    type='text'
                    className='form-input'
                    placeholder='Type your full name here'
                    name='uname'
                    id='username'
                    value={uname}
                    onChange={handleChange}
                />
                <div className='form-label'>Current Job</div>
                <select
                    className='form-select'
                    name='job'
                    id='userjob'
                    value={job}
                    onChange={handleChange}
                >
                    <option value="Tech Consultant"> Tech Consultant </option>
                    <option value="Product Researcher"> Product Researcher </option>
                    <option value="Fullstack Developer"> Fullstack Developer </option>
                    <option value="Data Scientist"> Data Scientist </option>
                </select>
                <div className='form-label'>Domicile</div>
                <input
                    type='text'
                    className='form-input'
                    placeholder='Type your domicile (city) here'
                    name='domicile'
                    id='userdom'
                    value={domicile}
                    onChange={handleChange}
                />
                <div className='form-label'>Phone Number</div>
                <input
                    type='number'
                    className='form-input'
                    placeholder='(+62)'
                    name='phone'
                    id='userphone'
                    value={phone}
                    onChange={handleChange}
                />
                <div className='form-label'>Email</div>
                <input
                    type='text'
                    className='form-input'
                    placeholder='youremail@bla.com'
                    name='email'
                    id='useremail'
                    value={email}
                    onChange={handleChange}
                />
                <div className='form-label'>GitHub</div>
                <input
                    type='text'
                    className='form-input'
                    placeholder='github.com/'
                    name='git'
                    id='usergit'
                    value={git}
                    onChange={handleChange}
                />
                <div className='form-label'>Formal Photo</div>
                <input
                    type='file'
                    className='form-file'
                    name='photo'
                    id='userphoto'
                    onChange={addImgHandler}
                />
            </form>

            <button
                className='btn'
                onClick={submitHandler}
                type='submit'
            >
                Process
            </button>

            <button
                className='btn-reset'
                onClick={resetHandler}
                type='button'
            >
                Reset
            </button>
        </div>

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
             <ModalData
                data = {formData}
                uname = {uname}
                job = {job}
                domicile = {domicile}
                phone = {phone}
                email = {email}
                git = {git}
                photo = {photo}
            />
        </Modal>
        </>
    )
}
export default FormGroup;