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

// Utilizando método DELETE - Deletar dados existentes na API
function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
deleteUser(1)
