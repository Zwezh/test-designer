export enum AuthActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  GET_CURRENT_TEACHER = '[Auth] Get Current Teacher',
  GET_CURRENT_TEACHER_SUCCESS = '[Auth] Get Current Teacher success',
  GET_CURRENT_TEACHER_FAILURE = '[Auth] Get Current Teacher failure',

  GET_TEACHER_COLLECTION = '[Auth] Get Teacher Collection',
  GET_TEACHER_COLLECTION_SUCCESS = '[Auth] Get Teacher Collection success',
  GET_TEACHER_COLLECTION_FAILURE = '[Auth] Get Teacher Collection failure',

  UPDATE_CURRENT_TEACHER = '[Auth] Update Current Teacher',
  UPDATE_CURRENT_TEACHER_SUCCESS = '[Auth] Update Current Teacher success',
  UPDATE_CURRENT_TEACHER_FAILURE = '[Auth] Update Current Teacher failure',

  LOGOUT = '[Auth] Logout'
}
