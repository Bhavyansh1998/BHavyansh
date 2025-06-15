const apiURL = 'https://jsonplaceholder.typicode.com/users';

function fetchUsers() {
  const tableBody = document.getElementById('userTableBody');
  const errorDiv = document.getElementById('errorMsg');

  // Clear previous data
  tableBody.innerHTML = '';
  errorDiv.textContent = '';

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      errorDiv.textContent = `Failed to fetch data: ${error.message}`;
    });
}

// Fetch data on first load
fetchUsers();
