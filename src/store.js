import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userReducer} from './reducer'
import createSagaMiddleware from 'redux-saga'
import fetchSaga from './saga'

const sagaMiddleware=createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(
       thunk,sagaMiddleware,
        createLogger({
            predicate: () => __DEV__,
        }),
    ),
);



const persistConfig = {
    key: 'root',
    timeout: 0,
    storage: AsyncStorage,
    whitelist: []
};


const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = createStore(persistedReducer, {}, enhancer);
sagaMiddleware.run(fetchSaga);
export const persistor = persistStore(store);

// const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(fetchSaga);


