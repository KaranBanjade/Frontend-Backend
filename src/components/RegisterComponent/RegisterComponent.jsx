const RegisterComponent = () => {
    return (
        <>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    );
}

export default RegisterComponent;