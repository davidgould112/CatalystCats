import { createStore, combineReducers } from 'redux';
import { catListReducer, formReducer } from './reducer'
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  form: formReducer,
  list: catListReducer
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['form'],
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
}

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);