import './App.css';
import { useState } from 'react';
import FormGroup from './component/FormGroup';
//import ModalCard from './component/ModalCard';

function App() {
  const [userData, setUserData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [key, setKey] = useState(0);

  const submitDataHandler = (userDataForm) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userDataForm,
          key: String(key),
        }
      ]
    })
    setKey(key + 1);
  }

  const resetHandler = () => {
    setUserData('');
    setModalState(false);
  }

  console.log(modalState);

  return (
    <div className="App">
      <FormGroup onSubmitData={submitDataHandler} />
      <ModalCard data={userData} modalState={modalState} onClose={closeHandler}/> 
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
export default App;
