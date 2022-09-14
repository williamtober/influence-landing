import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        twitter : [
            
        ],
        twitch : [

        ],
        youtube : [

        ]
    },
    reducers: {
        addTwitter: (state, action) => {
            state.twitter = action.payload;
        },
        addTwitch: (state, action) => {
            state.twitch = action.payload;
        },
        addYoutube: (state, action) => {
            state.youtube = action.payload;
        }
    }
});

export const { addTwitter, addTwitch, addYoutube } = dataSlice.actions;

//selectors
export const selectTwitter = (state) => state.data.twitter;
export const selectTwitch = (state) => state.data.twitch;
export const selectYoutube = (state) => state.data.youtube;


export default dataSlice.reducer;