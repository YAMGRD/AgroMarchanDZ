import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ReviewDetails from "../screens/product";
import Home from "../screens/Home";
const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title:'Home ',
            //headerStyle:{backgroundColor:'#e2e2e2'}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
            title:'Culculate'
        }
    },
};
const HomeStack = createStackNavigator(screens , {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#e0e0e3', 
            height:100,
        },
        headerTintColor:'#000',
    }
});
export default createAppContainer(HomeStack);