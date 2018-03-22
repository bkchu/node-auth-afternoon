import React from "react";

const Student = props => {
  return (
    <div className="Student">
      <p onClick={props.clicked} className="Student__id">
        {props.id}
      </p>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
};

export default Student;
