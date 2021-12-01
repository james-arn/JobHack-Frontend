import "./Card.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Card = ({ title, company, description, salary }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  //   const openModal = () => {
  //       setModalIsOpen(true);
  //     };
  const shortenedDesc = description.substring(0, 100).concat("...");
  const roundedSalary = Math.round(salary);
  const addToListHandler = () => {
    let job = {
      title,
      company,
      description,
      salary,
    };
  };

  return (
    <div className="card-container">
      <p className="card-job-title">{title}</p>
      <div className="card-subrow">
        <p className="card-salary">£{roundedSalary}.00</p>
        <p className="card-company">{company}</p>
      </div>
      <p className="card-description">{shortenedDesc}</p>
      {/* <button onClick={openModal}> */}
      {/* See more...
      </button> */}
      {/* <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> */}
      <button className="button" onClick={addToListHandler}>
        Add to List
      </button>
    </div>
  );
};
