import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td><button className="btn btn-danger" onClick={() => { props.removeGrade(props.id); }}>DELETE</button></td>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map((todo, index) => {
              return (
                <Grade key={todo.id} id={todo.id} grade={todo} removeGrade={this.props.removeGrade} />
              );
            })
          }
        </tbody>

      </table>
    );
  }
}
