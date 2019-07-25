import { combineReducers } from 'redux';
import inputReducer from './input-reducer';
import loginReducer from './login-reducer';
import resourceReducer from './resource-reducer';
import settingsReducer from './settings-reducer';
import downloadReducer from './download-reducer';
import fetchDownloadedFilesReducer from './downloaded-reducer';
const rootReducer = combineReducers({
    inputText: inputReducer,
    loginData: loginReducer,
    resource: resourceReducer,
    settings: settingsReducer,
    downloadProgress: downloadReducer,
    fetchdownloadedFiles: fetchDownloadedFilesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;