import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import AlbumbDetails from "../screens/AlbumbDetails";

const Stack = createStackNavigator();

const MyStackNavigator = () => (
<Stack.Navigator initialRouteName="Home"
                 screenOptions={{
                     headerMode: 'screen',
                     headerTintColor: 'white',
                     headerStyle: { backgroundColor: 'tomato' },
                 }}
>
    <Stack.Screen
        name="Home"
        component={Home}
        options={{
            title: 'Lab test 2',
        }}
    />
    <Stack.Screen
        name="Details"
        component={AlbumbDetails}
        options={{
            title: 'Albumb Details',
        }}
    />
</Stack.Navigator>
);
export default MyStackNavigator;
