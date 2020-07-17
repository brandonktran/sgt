import React from 'react';

export default function Header(props) {
  return (
    <h1>Student Grade Table <span className="badge badge-secondary">{props.avg}</span></h1>
  );
}
