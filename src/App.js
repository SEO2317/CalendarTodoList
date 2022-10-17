import './App.css';
import Modal from './Components/Modal/Modal';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const App = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, onChange] = useState(new Date());

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      
      <Modal/> <React.Fragment>
      <button onClick={openModal}>모달팝업</button>
      
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <main> {props.children} </main>
        <Calendar onChange={onChange}  value={value} />
      </Modal>
    </React.Fragment>

    </>
  );
}

export default App;
