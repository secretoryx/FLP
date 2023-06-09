const studentData = [
  {
      rollNumber: '2023078',
      name: 'Haroon Badshah',
      fatherName: 'Zulfiqar Ali Shah',
      marks: 866,
      session: '2014',
      certificateUrl: '/certificate/2023078.pdf'
  },
  {
      rollNumber: '2023050',
      name: 'Osama Ayub',
      fatherName: 'Ayub Khan',
      marks: 2010,
      session: '2018-2021',
      certificateUrl: '/certificate/2023050.pdf'
  },
  {
      rollNumber: '2023104',
      name: 'Abdul Khaliq',
      fatherName: 'Saeed Jan',
      marks: 1698,
      session: '2019-2021',
      certificateUrl: '/certificate/2023104.pdf'
  },
   {
      rollNumber: '2011187',
      name: 'TAYYABA JABEEN',
      fatherName: 'FAZLUR REHMAN',
      marks: 1692,
      session: '2001 2003',
      certificateUrl: '/certificate/2011187.pdf'
  },
  {
      rollNumber: '2023191',
      name: 'SAIMA RAZAQ',
      fatherName: 'MUHAMMAD RAZAQ',
      marks: 1677,
      session: '2002 2004',
      certificateUrl: '/certificate/2023192.pdf'
  },
  {
      rollNumber: '2023193',
      name: 'FIZZA TANVEER',
      fatherName: 'M.AMJAD TANVEER',
      marks: 1722,
      session: '2015 2016',
      certificateUrl: '/certificate/2023193.pdf'
  },
  {
      rollNumber: '2091252',
      name: 'NADIA BIBI',
      fatherName: 'AKHTAR HUSSAIN',
      marks: 1633,
      session: '2018 2020',
      certificateUrl: '/certificate/2091252.pdf'
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

      const nameCell = newRow.insertCell();
      const fatherNameCell = newRow.insertCell();
      const marksCell = newRow.insertCell();
      const sessionCell = newRow.insertCell();
      const downloadCell = newRow.insertCell();

      nameCell.textContent = studentInfo.name;
      fatherNameCell.textContent = studentInfo.fatherName;
      marksCell.textContent = studentInfo.marks;
      sessionCell.textContent = studentInfo.session;

      const downloadButton = document.createElement('button');
      downloadButton.textContent = 'Get';
      downloadButton.className = 'download-button';
      downloadCell.appendChild(downloadButton);

      downloadButton.onclick = function () {
          const certificateModal = document.getElementById('certificate-modal');
          const closeCertificateModalButton = document.getElementsByClassName('close-button')[0];

          const certificateDownloadButton = document.getElementById('certificate-download-button');
          certificateDownloadButton.href = studentInfo.certificateUrl;

          certificateModal.style.display = 'block';

          closeCertificateModalButton.onclick = function () {
              certificateModal.style.display = 'none';
          }

          window.onclick = function (event) {
              if (event.target == certificateModal) {
                  certificateModal.style.display = 'none';
              }
          }
      };
  } else {
      alert('No student found with the entered roll number.');
  }
});
