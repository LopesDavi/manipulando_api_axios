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

//GET - Pegando informações de 1 único user (Parâmetros)
function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userId.textContent = response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}
getUser(2)
