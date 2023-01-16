let fetchButton = document.getElementById('fetch-button');
let text = document.getElementById('text');

const apiCall = async () => {
  await fetch(
    'https://restapi-express-mysql-production.up.railway.app/api/employees'
  )
    .then((response) => response.json())
    .then((data) => {
      text.innerHTML = '';
      data.forEach((element) => {
        text.innerHTML += cardComponent(element.id, element.name, element.salary);
      });
    });
};

const cardComponent = (id, name, salary) => {
  return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p>ID: ${id}</p>
        <p>Salario: ${salary}</p>
      </div>
    </div>
  `;
};

const fetchAndLoad = () => {
  text.innerHTML = '<p>Conectadonse a la base de datos...</p>';
  try {
    apiCall();
  } catch (error) {
    console.log(error);
  }
};

fetchButton.addEventListener('click', fetchAndLoad);

fetchAndLoad();