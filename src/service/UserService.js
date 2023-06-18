import request from '../api';


// const BASE = ''
export const Login = ({account, password})=>{
    // return ajax(BASE + '/user/login',{account, password}, 'POST');
    return request.post('/user/login', {account, password})
}