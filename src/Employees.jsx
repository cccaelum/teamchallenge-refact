function Employee({ name, lastName, hobbies, age }) {
    return (
      <div className="employee-card">
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Apellidos:</strong> {lastName}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(', ')}</p>
        <p><strong>Edad:</strong> {age}</p>
      </div>
    );
  }
  
  function EmployeeList({ employees }) {
    return (
      <div className="employee-list">
        {employees.map((employee) => (
          <Employee 
            name={employee.name}
            lastName={employee.lastName}
            hobbies={employee.hobbies}
            age={employee.age}
          />
        ))}
      </div>
    );
  }
  
  export default EmployeeList;