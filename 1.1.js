function findManagerHierarchy(employees, employeeId) {
    const managerHierarchy = [];
  
    function findManagers(currentEmployeeId) {
      const employee = employees.find(emp => emp.employeeId === currentEmployeeId);
  
      if (employee) {
        managerHierarchy.push(employee.employeeId);
        if (employee.managerId !== currentEmployeeId) {
          findManagers(employee.managerId);
        }
      }
    }
  
    findManagers(employeeId);
    return managerHierarchy;
  }
  
 
  const employees = [
    { employeeId: 11, name: 'John', managerId: 11 },
    { employeeId: 50, name: 'Todd', managerId: 73 },
    { employeeId: 150, name: 'Alex', managerId: 200 },
    { employeeId: 73, name: 'Sara', managerId: 11 },
    { employeeId: 200, name: 'Alex', managerId: 50 },
    { employeeId: 100, name: 'Alex', managerId: 150 },
  ];
  
  const employeeId = 73;
  const managerHierarchy = findManagerHierarchy(employees, employeeId);
  console.log(managerHierarchy); 
  