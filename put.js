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

// Utilizando método PUT - Editar dados existentes na API
const userUpdated = {
  name: 'João Alfredo',
  avatar: 'https://picsum.photos/200/300',
  city: 'Mato Grosso'
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
updateUser(1, userUpdated)
