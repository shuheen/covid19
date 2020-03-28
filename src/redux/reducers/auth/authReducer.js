const initState = {
   email:"",
   password:"",
   loginError:"",
   isLoggedIn:false,
}
const AuthReducer = (state = initState,action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.payload,
                isLoggedIn:false
            }
        
        case 'LOGIN_SUCCESS':
                return {
                    ...state,
                    loginError: "",
                    isLoggedIn: true,
                    email: action.payload.email,
                    password:action.payload.password
                }
        case 'USER_LOGOUT':
            localStorage.setItem('userLoggedIn', false)
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;