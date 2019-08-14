import {createAppContainer, createStackNavigator} from 'react-navigation'
import Login from './pages/Login';
import Main from './pages/Main';
//*Routes se trata de um caminho para as páginas, como se fosse um módulo
// E dentro dela nos colocamos as direções para as páginas em ordem sugerida 
// Create app 
// Os contêineres são responsáveis ​​por gerenciar o estado do aplicativo e vincular 
// seu navegador de nível superior ao ambiente do aplicativo.
// No Android, o contêiner de aplicativos usa a API de vinculação para lidar com o
// botão "Voltar". O contêiner também pode ser configurado para persistir seu 
// estado de navegação. Na web, você usaria contêineres diferentes do Reagir Nativo.
export default createAppContainer(
    createStackNavigator({
    Login,
    Main,
})
);