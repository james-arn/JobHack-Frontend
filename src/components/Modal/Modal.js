import { ModalCont, ModalWrapper, CurrentDataContainer, TitleContainer, DescriptionContainer, ButtonContainer } from "../styles/modal.styled";
import Modal from "react-modal"

export const Modal1 = ({modalIsOpen, setModalIsOpen}) => {
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    return (
        <>
        
           <ModalCont isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalWrapper>
          <CurrentDataContainer>
            
          </CurrentDataContainer>
          <TitleContainer>
            <label>Update this card's title</label>
            
          </TitleContainer>
          <DescriptionContainer>
            <label>Add a description for your card</label>
            
          </DescriptionContainer>
          <ButtonContainer>
           
            <button onClick={closeModal}>Discard</button>
          </ButtonContainer>
        </ModalWrapper>
      </ModalCont> 

        </>
    )
}


  
