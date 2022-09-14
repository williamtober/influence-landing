import { createStore, applyMiddleware } from 'reduxt';
import dataReducer from '../features/dataSlice';

export const store = createStore({
    reducer: {
        data: dataReducer,
    },
}, applyMiddleware(thunk.withExtraArgument(api)));