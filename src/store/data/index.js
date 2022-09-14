import API from '../../api';

export const getAllTwitter = () => async (dispatch) => {
    try {
        const { data } = await API.getTwitter();
        dispatch({ type: 'GET_TWITTER', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getAllTwitch = () => async (dispatch) => {
    try {
        const { data } = await API.getTwitch();
        dispatch({ type: 'GET_TWITCH', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getAllYoutube = () => async (dispatch) => {
    try {
        const { data } = await API.getYoutube();
        dispatch({ type: 'GET_YOUTUBE', payload: data });
    } catch (error) {
        console.log(error);
    }
}