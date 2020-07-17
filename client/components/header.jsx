import React from 'react';

export default function Header(props) {
  return (
    <h1 className="m-3">Student Grade Table  <span>Average Grade<p className="badge badge-secondary"> {props.avg}</p></span></h1>
  );
}
