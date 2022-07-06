import React from "react";
import '../Styles/Components/Loader.css';

const Loader = (props) => (
  <div className="loader-container">
    <div className="task-skeleton">
        <div className="task-complete">
            <div className="task-skeleton__circle-left"></div>
            <div className="task-skeleton__text"></div>
        </div>
        <div className="task-skeleton__circle-right"></div>
    </div>
    <div className="task-skeleton">
        <div className="task-complete">
            <div className="task-skeleton__circle-left"></div>
            <div className="task-skeleton__text"></div>
        </div>
        <div className="task-skeleton__circle-right"></div>
    </div>
    <div className="task-skeleton">
        <div className="task-complete">
            <div className="task-skeleton__circle-left"></div>
            <div className="task-skeleton__text"></div>
        </div>
        <div className="task-skeleton__circle-right"></div>
    </div>
  </div>
)

export {Loader}

