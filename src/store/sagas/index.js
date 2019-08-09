import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions, Types as LoginTypes } from '../../store/ducks/login';
import { Creators as RepositoriesActions, Types as RepositoriesTypes } from '../../store/ducks/repositories';

import { navigate } from '../../services/navigation';

function* login(action) {
  try {
    const { username } = action.payload;

    const response = yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username, response.data.avatar_url));

    navigate('Repositories');
  } catch {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositoriesRequest() {
  try {
    const { username } = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));

    navigate('Repositories');
  } catch {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositoriesRequest),
  ]);
}
