import axios from 'axios';
//axios é um facilitador do ajax, para que possamos utilizar chamadas mais 
//rapidas sem muito código
const api = axios.create({
    baseURL: 'http//10.0.3.2:3333'
});
//Android cria uma máquina virtuau, então precisamos fazer alterações
//Se temos Genymotion como emulador utilizamos o 10.0.3.2 como chamada para api
//tem outro modo chamando o adb no cmd, falando para que quando utilizar a porta
// 3333, que ele utilize também a porta 3333, "adb reverse tcp:3333 tcp:3333"
export default api;