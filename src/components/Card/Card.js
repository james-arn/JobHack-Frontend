import "./Card.css";

export const Card = ({
  title,
  company,
  description,
  salary,
}) => {
  const shortenedDesc = description.substring(0, 100).concat("...");
  const roundedSalary = Math.round(salary)  
  const addToListHandler = () => {
    let job = {
      title,
      company,
      description,
      salary
    };
    console.log(job)
  };

  return (
    <div className="card-container">
      <p className="card-job-title">{title}</p>
      <div className="card-subrow">
        <p className="card-salary">£{roundedSalary}.00</p>
        <p className="card-company">{company}</p>
      </div>
      <p className="card-description">{shortenedDesc}</p>
      <a href="www.google.com">See more...</a>
      <button onClick={addToListHandler}>Add to List</button>
    </div>
  );
};
