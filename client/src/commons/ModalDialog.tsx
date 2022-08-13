import React from 'react';
import Modal from 'react-modal';

interface DialogState {
  modalIsOpen: any;
  closeModal: () => void;
}

export const ModalDialog = ({modalIsOpen, closeModal}: DialogState) => {
    const customStyles = {
      content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
      }
    };
  
    return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <button className="float-right p-2" onClick={() => closeModal()}>X</button>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Obtené tú suscripción</div>
                <span className="block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Superaste la cantidad de artículos que podés leer por día, obtené tú suscripción para leer más
                </span>
            </div>

            <div className="text-center my-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  OBTENER
              </button>
            </div>
            </div>
        </Modal>
    )
  }