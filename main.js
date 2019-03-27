/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here

const sortedEmployees = (employeesArr) => {
    return employeesArr.reduce((sortedEmployees, employee) => {
      let employeeName = "";
  
      if (employee.nameOrder === "reverse") {
        employeeName += employee.last + " " + employee.first;
      } else {
        employeeName += employee.first + " " + employee.last;
      }
  
      if (!sortedEmployees[employee.group]) {
        sortedEmployees[employee.group] = [employeeName];
      } else {
        sortedEmployees[employee.group].push(employeeName);
      }
      return sortedEmployees;
    }, {});
  }

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
