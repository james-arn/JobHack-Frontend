import { useState } from "react";
import { initialData } from "../../initialData";
import { Navbar } from "../Navbar/Navbar";
import "./Manage.css";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "../Column/Column"


export const Manage = () => {
  const [board, setBoard] = useState(initialData);

  const onDragEndHandler = (result) => {
    const { destination, source, draggableId } = result;
    // Cancelled drop
    if (!destination) {
      return;
    }
    // Drop card in the same place?
    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    // If card drops in the same column
    // Reordering a column
    if (start === finish) {
      const newJobIds = Array.from(start.jobIds);
      newJobIds.splice(source.index, 1);
      newJobIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        jobIds: newJobIds,
      };

      const newState = {
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      };

      setBoard(newState);
      return;
    }

    // Moving from one column to another.
    const startJobIds = Array.from(start.jobIds);
    startJobIds.splice(source.index, 1);

    const newStart = {
      ...start,
      jobIds: startJobIds,
    };

    const finishJobIds = Array.from(finish.jobIds);
    finishJobIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      jobIds: finishJobIds,
    };

    const newState = {
      ...board,
      columns: {
        ...board.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    console.log(newState)

    setBoard(newState);
  };

  return (
    <div className="manage-container">
      <Navbar />
      <h2 className="manage-title">
        Use our Canban Board to keep track of your tasks in the Application
        Process
      </h2>
      <div className="canban-board">
        <DragDropContext onDragEnd={onDragEndHandler}>
          <div className="canban-container">
            {board.columnOrder.map((columnId) => {
              const column = board.columns[columnId];
              const jobs = column.jobIds.map((jobId) => board.jobs[jobId]);

              return <Column key={column.id} column={column} jobs={jobs} />;
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
