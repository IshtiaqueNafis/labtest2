import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchAlbums, fetchUserDetails} from "../api/axios";

const initialState = {
    albums: [],
    user: {},
    loading: false,
    error: null
}

export const getalbumbsAsync = createAsyncThunk(
    'album/getall',
    async (_, thunkApi) => {
        try {

            return await fetchAlbums();
        } catch (e) {
            thunkApi.rejectWithValue(e);
        }
    }
)
export const getUserDetailsAsync = createAsyncThunk(
    'album/getUserDetails',
    async ({id}, thunkApi) => {
        try {
            const data = await fetchUserDetails()
            return data.filter(d => d.id === id)[0];

        } catch (e) {

        }

    }
)


export const albumsSlice = createSlice({
        name: "album",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getalbumbsAsync.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            });

            builder.addCase(getalbumbsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.albums.push(...action.payload);
                state.error = null;
            });

            builder.addCase(getalbumbsAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
            });

            builder.addCase(getUserDetailsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            });
            builder.addCase(getUserDetailsAsync.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload)
                state.user = action.payload;
                state.error = null;
            });
            builder.addCase(getUserDetailsAsync.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload;
            })

        },

    }
)


export const albumReducer = albumsSlice.reducer
