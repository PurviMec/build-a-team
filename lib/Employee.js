class Employee {
    constructor(employeeName){
        this.name = employeeName;
        if (this.Name === '') {
            console.error('fwef');
          } else {
            this.Name = employeeName;
          }
        }
        
        id(employeeId){
            this.id = employeeId;
            if (this.employeeId === '') {
                console.error('fwef');
            } else {
                this.employeeId = employeeId;
            }
        } 
}
        






module.exports = Employee;


