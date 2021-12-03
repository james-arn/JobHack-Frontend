import "./Card.css";
import _ from "lodash"
import { useState } from "react";
import { Modal1 } from "../Modal/Modal.js"




export const Card = ({ title, company, description, salary, board, setBoard }) => {
  const shortenedDesc = description.substring(0, 100).concat("...");
  const roundedSalary = Math.round(salary);
  const [modalIsOpen, setModalIsOpen] = useState(false); 
const openModal = () => {
    setModalIsOpen(true);
  };
  const addToListHandler = () => {
    
    const newJobId = _.uniqueId("job_")
    
    let newState = {
      ...board,
    };

    newState = {
      ...newState,
      jobs: {
        ...newState.jobs,
        [newJobId]: {id:newJobId, title, company, description, salary},
      },
      columns: {
        ...newState.columns,
        'column-1': {
          ...newState.columns['column-1'],
          jobIds: [...newState.columns['column-1'].jobIds, newJobId]
        }
      }
    }

    setBoard(newState)
  };

  return (
    <div className="card-container">
      <p className="card-job-title">{title}</p>
      <div className="card-subrow">
        <p className="card-salary">£{roundedSalary}.00</p>
        <p className="card-company">{company}</p>
      </div>
      <p className="card-description">{shortenedDesc}</p>
      <div className="button-div">
      <button className="seeMoreButton" onClick={openModal}>
      Expand
      </button>
      {modalIsOpen && <Modal1 modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}
      <button className="button" onClick={addToListHandler}>
        Add to List
      </button>
      </div>
    </div>
  );
};
