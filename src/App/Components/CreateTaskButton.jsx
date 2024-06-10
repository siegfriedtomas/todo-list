import React from 'react';
import '../../resources/styles/components/CreateTaskButton.css';

function CreateTaskButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <button
      className="create-task-button"
      onClick={onClickButton}
      aria-label='Toggle task creator modal'
    >
      Add task
    </button>
  );
}

export { CreateTaskButton };
