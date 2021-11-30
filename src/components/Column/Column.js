import "./Column.css";
import { JobCard } from "../JobCard/JobCard";
import { Droppable } from "react-beautiful-dnd";

export const Column = (props) => {
  return (
    <div className="col-container">
      <h3 className="col-title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div 
            className="job-list"
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {props.jobs.map((job,index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
