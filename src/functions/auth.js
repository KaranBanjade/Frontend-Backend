// import process env
const api = process.env.REACT_APP_API_URL||'http://localhost:5000';
const LoginFunction = (credential, password) => {
    // dummy
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
                window.location.href = '/dashboard';
            } else {
                alert(result.message);
            }
        })
        .catch(error => console.log('error', error));
};
const SignupFunction = (credential) => {
    const { username, email,name, number, password, password2 } = credential;
    console.log(username, email,name, number, password, password2 )
    // dummy
    if(username === 'admin' && password === 'admin'){
        window.location.href = '/dashboard';
        return true;
    }
    if(!username || !email || !name || !number ||!password){
        alert('Please fill fields');
        return false;
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
                window.location.href = '/dashboard';
            } else {
                alert(result.message);
            }
        }
        )
        .catch(error => console.log('error', error));
};
const LogoutFunction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
}

const AuthFunction = {
    LoginFunction,
    SignupFunction,
    LogoutFunction
}
export default AuthFunction;
