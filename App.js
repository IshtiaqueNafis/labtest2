import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import MyStackNavigaor from "./routes/MyStackNavigaor";
import {Provider} from "react-redux";
import {store} from "./redux/store";

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
            <MyStackNavigaor/>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
