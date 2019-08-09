export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

const INITIAL_STATE = { username: null, avatar_url: null, error: false, loading: false };

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        avatar_url: action.payload.avatar_url,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: username => ({ type: Types.REQUEST, payload: { username } }),
  loginSuccess: (username, avatar_url) => ({ type: Types.SUCCESS, payload: { username, avatar_url } }),
  loginFailure: () => ({ type: Types.FAILURE }),
};
