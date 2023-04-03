const studentData = [
  {
    rollNumber: '2023078',
    name: 'Syed Haroon Badshah',
    fatherName: 'Zulfiqar Ali Shah',
    Date: 2/04/2023
  },
  {
    rollNumber: '002',
    name: 'Jane Smith',
    fatherName: 'William Smith',
    marks: 90
  },
  // Add more student data here
];

document.getElementById('student-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const rollNumberInput = document.getElementById('roll-number').value;
  const studentInfo = studentData.find(student => student.rollNumber === rollNumberInput);

  const tableBody = document.getElementById('student-data').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  if (studentInfo) {
    const newRow = tableBody.insertRow();

    const rollNumberCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const fatherNameCell = newRow.insertCell();
    const DateCell = newRow.insertCell();

    rollNumberCell.textContent = studentInfo.rollNumber;
    nameCell.textContent = studentInfo.name;
    fatherNameCell.textContent = studentInfo.fatherName;
    DateCell.textContent = studentInfo.marks;
  } else {
    alert('No student found with the entered roll number.');
  }
});
