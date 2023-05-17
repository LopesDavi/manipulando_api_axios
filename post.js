//1º - URL da api
const url = 'http://localhost:5500/api'

//Função responsável por pegar dado já existente na API
function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

//Rodando function
getUsers()

// Utilizando método POST - Inserindo dados na API

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => response.data)
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Francisco Assis',
  avatar: 'https://picsum.photos/200/300',
  city: 'Rio de Janeiro'
}
addNewUser(newUser)
