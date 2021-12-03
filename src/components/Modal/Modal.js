import { StyledButton, OuterModalDiv, ModalCont, ModalWrapper, CurrentDataContainer, TitleContainer, DescriptionContainer, ButtonContainer } from "../styles/modal.styled";
import Modal from "react-modal"

export const Modal1 = ({modalIsOpen, setModalIsOpen}) => {
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    return (
        <OuterModalDiv>
           <ModalCont isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalWrapper>
          <TitleContainer>
            <label>Update this card's title</label>
          </TitleContainer>
          <DescriptionContainer>
            <label>Add a description for your card</label>
          </DescriptionContainer>
          <ButtonContainer>
            <StyledButton onClick={closeModal}>Discard</StyledButton>
          </ButtonContainer>
        </ModalWrapper>
      </ModalCont> 

        </OuterModalDiv>
    )
}


  
