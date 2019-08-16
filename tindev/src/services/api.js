import axios from 'axios'
/* Axios é um JSON, que faz chamada com a api do app*/
const api= axios.create({
    baseURL:'http://localhost:3333'
});
/*Para que a conexão com api seja feita, é necessário que o servidor esteja on*/

export default api;