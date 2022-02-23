import { BehaviorSubject } from "rxjs";
import Router from "next/router";
import axios from "axios";

const baseUrl = 'http://staging-api.learnali.com/auth'


const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')))



const login = async (body: any) => {
    const data = await axios.post(`${baseUrl}/login`,
        {
            body
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    userSubject.next(data);
    localStorage.setItem('user', JSON.stringify(data));
    console.log(data);
    return data;
}

const signup = async (body: any) => {
    const data = await axios.post(`${baseUrl}/signup`,
        {
            body
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    userSubject.next(data);
    localStorage.setItem('user', JSON.stringify(data));
    console.log(data);
    return data;
}


const logout = async () => {
    localStorage.removeItem('user');
    userSubject.next(null)
    Router.push('/auth/login')
}

export const useService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    login,
    signup,
    logout,
    //signup
}