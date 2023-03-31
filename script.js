function getResult() {
  // Retrieve the roll number from the form data
  var rollno = document.getElementById("rollno").value;
  var rollno = localStorage.getItem("1");

  // Validate the roll number (for example, check for numeric values only)
  // ...

  // Query the database or list of valid roll numbers
  // and retrieve the result details for the given roll number
  // ...

  // Display the result details in the HTML
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '<h2>Result Details for Roll No. ' + rollno + '</h2>' +
                        '<p>Name: John Doe</p>' +
                        '<p>Class: 10th</p>' +
                        '<p>Subject 1 Score: 90</p>' +
                        '<p>Subject 2 Score: 85</p>' +
                        '<p>Subject 3 Score: 92</p>';
}
