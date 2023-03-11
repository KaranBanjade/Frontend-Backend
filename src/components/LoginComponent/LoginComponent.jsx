const LoginComponent = () => {

    return (
        <>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    );
    
};

export default LoginComponent;