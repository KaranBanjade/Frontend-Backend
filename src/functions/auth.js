import { json } from "react-router";

// import process env
const api = process.env.REACT_APP_API_URL||'http://localhost:5000';
const LoginFunction = (credential, password) => {
    return new Promise((resolve, reject) => {
    if(credential === 'admin' && password === 'admin'){
        window.location.href = '/dashboard';
    }
    if(!credential || !password){
        alert('Please fill all fields');
        return false;
    }
    const url = `${api}/login`;
    const data = {
        credentials: credential,
        password: password
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.message === "logged in successfully") {
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.data));
                
                resolve({
                    status: 200,
                    message: result.message
                })
            } else {
                reject({
                    status: 400,
                    message: result.message
                })
            }
        })
        .catch((error) => {
            console.log('error', error)
            reject({
                status: 500,
                message: error.message
            })

        });
    })
};
const SignupFunction = (credential) => {
    return new Promise((resolve, reject) => {
    const { username, email,name, number, password, password2 } = credential;
    console.log(username, email,name, number, password, password2 )
    // dummy
    if(username === 'admin' && password === 'admin'){
        window.location.href = '/dashboard';
         return resolve({
            status: 200,
            message: 'logged in successfully'
         });
    }
    if(!username || !email || !name || !number ||!password){
        return reject({
            status: 400,
            message: 'Please fill all fields'
        });
    }
    // if(password !== password2){
    //     alert('Password not match');
    //     return false;
    // }
    const url = `${api}/signup`;
    const data = {...credential};
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.status === 200) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                resolve({
                    status: 200,
                    message: result.message
                });
            } else {
                reject({
                    status: 400,
                    message: result.message
                });
            }
        }
        )
        .catch((error) => {
            console.log('error', error)
            reject({
                status: 500,
                message: error.message
            })

        });
    })
};
const LogoutFunction = () => {
    return new Promise((resolve, reject) => {
        try{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            resolve({
                status: 200,
                message: 'logged out successfully'
            });
        }
        catch(error){
            reject({
                status: 500,
                message: error.message
            });
        }
    })
}

const AuthFunction = {
    LoginFunction,
    SignupFunction,
    LogoutFunction
}
export default AuthFunction;
