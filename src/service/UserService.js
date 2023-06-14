import request from '../api';

export const Login = ({username, password})=>{
    const response = request.post(`/user/login`,{username,password});
    console.log(response.date);
}