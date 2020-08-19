import React from 'react';

function Grade(props) {

  if (props.edit[0] === true && props.id === props.edit[1]) {
    return (
      <tr>
        <td><input
          autoFocus
          className="inputs"
          type="text"
          value={props.grade.name}
        // onChange={this.handleNameChange}
        /></td>
        <td><input
          autoFocus
          className="inputs"
          type="text"
          value={props.grade.course}
        // onChange={this.handleNameChange}
        /></td>
        <td><input
          autoFocus
          className="inputs"
          type="text"
          value={props.grade.grade}
        // onChange={this.handleNameChange}
        /></td>
        <td><i className="fas fa-trash-alt" onClick={() => { props.removeGrade(props.id); }} style={{ cursor: 'pointer' }}></i></td>
        <td><i className="far fa-edit" onClick={() => { props.editToggle(props.id); }} style={{ cursor: 'pointer' }}></i></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{props.grade.name}</td>
        <td>{props.grade.course}</td>
        <td>{props.grade.grade}</td>
        <td><i className="fas fa-trash-alt" onClick={() => { props.removeGrade(props.id); }} style={{ cursor: 'pointer' }}></i></td>
        <td><i className="far fa-edit" onClick={() => { props.editToggle(props.id); }} style={{ cursor: 'pointer' }}></i></td>
      </tr>
    );
  }
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map(todo => {
              return (
                <Grade key={todo.id} id={todo.id} grade={todo} removeGrade={this.props.removeGrade} editGrade={this.props.editGrade} edit={this.props.edit} editToggle={this.props.editToggle} />
              );
            })
          }
        </tbody>

      </table>
    );
  }
}
