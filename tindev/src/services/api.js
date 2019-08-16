import axios from 'axios'
/* Axios é um JSON, que faz chamada com a api do app*/
const api= axios.create({
    baseURL:'http://192.168.1.56:3333'
});
/*Para que a conexão com api seja feita, é necessário que o servidor esteja on*/

export default api;