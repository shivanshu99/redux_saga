import {takeLatest,put,call} from 'redux-saga/effects';
import {loadPostSuccess,loadPostFail} from './action'


async function loadPostApi(){
    const response = await fetch(
		"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5728b06b5eab427983f198c7320ec810"
    );
    const data=await response.json();
    return data.articles
}

export function* onLoadPostStartAsync(){
    try{
        const response =yield call(loadPostApi);
   
        yield put(loadPostSuccess(response));
    }
    catch(error){
        yield put(loadPostFail(error));
    }
}

export function* onLoadPost(){
    yield takeLatest("LOAD_POST_START",onLoadPostStartAsync)
}