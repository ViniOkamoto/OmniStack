import {createAppContainer, createStackNavigator} from 'react-navigation'
import Main from './pages/main';
import Login from './pages/login';

/*
    createSwitchNavigator possui uma transferência estática, 
    para que o usuário possa voltar para página login por exemplo 
    createStackNavigator já possui uma transferência mais 
    visual, com o botão back
    createButtonNavigator cria uns botões que levarão para o local desejado
    createMaterialTopTabNavigator tem uns botões no topo
    createDrawerNavigator é uma aba lateral para utilizar a navegação*/
export default createAppContainer(
    createStackNavigator({
        Login,
        Main,
    })
)