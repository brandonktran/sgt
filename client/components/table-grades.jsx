import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
    </tr>
  );
}

export default class GradeTable extends React.Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map(todo => {
              return (
                <Grade key={todo.id} grade={todo} />
              );
            })
          }
        </tbody>

      </table>
    );
  }
}
