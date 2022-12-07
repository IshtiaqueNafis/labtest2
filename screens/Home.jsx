import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getalbumbsAsync} from "../redux/albumbSliceReducer";

const Home = ({navigation}) => {

    const dispatch = useDispatch();
    const {albums, loading} = useSelector(state => state.album)
    useEffect(() => {
        dispatch(getalbumbsAsync());
    }, [dispatch]);

    if (loading) return <Text>...Loading</Text>

    return (
        <View style={styles.container}>

            <Text>Nafis ishtiaque 101206872</Text>
            <FlatList

                keyExtractor={(item) => item.key}
                data={albums}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Details", {
                        id:item.id,
                        title: item.title,
                        userId:item.userId
                    })}>
                        <Text style={styles.item}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    },
})
export default Home;
