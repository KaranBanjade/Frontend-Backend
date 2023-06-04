// import process env
const api = process.env.REACT_APP_API_URL||'http://localhost:3001/';
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
        credential: credential,
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
            if (result.status === 200) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                window.location.href = '/dashboard';
            } else {
                alert(result.message);
            }
        })
        .catch(error => console.log('error', error));
};
const SignupFunction = (name, credential, password) => {
    if(!name || !credential || !password){
        alert('Please fill all fields');
        return false;
    }
    const url = `${api}/signup`;
    const data = {
        name: name,
        credential: credential,
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
            if (result.status === 200) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                window.location.href = '/dashboard';
            } else {
                alert(result.message);
            }
        })
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
