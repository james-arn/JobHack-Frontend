import "./JobCard.css";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

export const JobCard = ({ job, index }) => {
  const Container = styled.div`
    background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  `;
  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided, snapshot) => (
        <Container
          className="jobcard-container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {job.title}
        </Container>
      )}
    </Draggable>
  );
};
