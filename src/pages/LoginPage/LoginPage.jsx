import React, { useState } from 'react';

import Components from '../../components';


const { LoginComponent, RegisterComponent } = Components;

const LoginPage = () => {
    const [login, setLogin] = useState(true);
    return (   
            <>
                {login? <LoginComponent setLogin = {setLogin} />: <RegisterComponent setLogin = {setLogin}  />}
                {/* To do: Switch A-> P */}
            </>
    );
}

export default LoginPage;