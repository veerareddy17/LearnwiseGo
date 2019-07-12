import { DOWNLOAD_START, DOWNLOAD_PROGRESS, DOWNLOAD_SUCCESS } from './action-types';
import { Dispatch } from 'redux';
import RNFetchBlob from 'rn-fetch-blob';
import Config from 'react-native-config';
import { Constant } from '../../constant';
const dirs = RNFetchBlob.fs.dirs.DocumentDir;

export const downloadResourceStart = () => {
    return {
        type: DOWNLOAD_START,
    };
};

export const downloadResourceProgress = (data: number) => {
    return {
        type: DOWNLOAD_PROGRESS,
        payload: data,
    };
};

export const downloadResourceSuccess = (data: number) => {
    return {
        type: DOWNLOAD_SUCCESS,
        payload: data,
    };
};

export class DownloadResourceFileProgress {
    public progress: number = 0;
    public isLoading: boolean = false;
}

export default function downloadFile(bearer_token: string, AppUserResourceID: number, filename: string): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        let params = {
            'AppResourceId': AppUserResourceID,
        };
        dispatch(downloadResourceStart());
        await RNFetchBlob.config({
            path: `${dirs}/${filename}`,
        }).fetch('POST', `${Config.BASE_URL}/${Constant.downloadFile}`, {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearer_token,
        }, JSON.stringify(params)).progress(async (received, total) => {
            let progress = (received / total);
            await dispatch(downloadResourceProgress(progress));
        }).then(async (res) => {
            console.log('file downloaded path', res);
            await dispatch(downloadResourceSuccess(0));
        });
    };
}