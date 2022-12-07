import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDetails} from "../api/axios";
import {getUserDetailsAsync} from "../redux/albumbSliceReducer";

const AlbumDetail = ({route}) => {
    const {id, title, userId} = route.params;
    const dispatch = useDispatch();
    const {user,loading} = useSelector(state => state.album);

    useEffect(
        () => {
           dispatch(getUserDetailsAsync({id:userId}))
        }, [dispatch,userId]
    )
    if (loading) return <Text>...Loading</Text>

    return (
        <View>
            <Text> Id:{id}</Text>
            <Text> Title:{title}</Text>
            <Text>UserName {user.name}</Text>
        </View>
    );
};

export default AlbumDetail;
