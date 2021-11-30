import "./JobCard.css";
import { Draggable } from "react-beautiful-dnd";
export const JobCard = ({ job, index }) => {
  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided) => (
        <div 
            className="jobcard-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
                {job.title}
                </div>
      )}
    </Draggable>
  );
};
