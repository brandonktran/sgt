import React from 'react';

export default function Header(props) {
  return (
    <>
      <h1 className="m-3 col title">Student Grade Table</h1>
      <h4 className="m-3 col average">Average Grade<p className="badge badge-secondary"> {props.avg}</p></h4>
    </>
  );
}
