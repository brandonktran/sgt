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
      <table style={{ width: '75%' }} className='table table-striped m-3 mr-4'>
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
