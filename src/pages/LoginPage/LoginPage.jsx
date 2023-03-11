import React, { useState } from 'react';

import Components from '../../components';


const { LoginComponent, RegisterComponent } = Components;

const LoginPage = () => {
    const [login, isLogin] = useState(true);
    return (   
            <>
                {login? <LoginComponent />: <RegisterComponent />}
                {/* To do: Switch A-> P */}
                <a href = "localhost:3000" onClick={() => isLogin(!login)}>{login? 'Register': 'Login'}</a>
            </>
    );
}

export default LoginPage;