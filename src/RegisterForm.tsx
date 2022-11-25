import { useCallback, useState } from "react";

export const RegisterForm = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [idPractitioner, setIdPractitioner] = useState<string>();

    const handleRegister = useCallback(() => {
        
    }, [email, password, idPractitioner])

    const handleChangeEmail = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }, [email])

    const handleChangePassword = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }, [password])

    const handleChangePractitioner = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setIdPractitioner(event.currentTarget.value);
    }, [idPractitioner])

    return (
        <div>
            <input type="email" value={email} onChange={handleChangeEmail}></input>
            <input type="password" value={password} onChange={handleChangePassword}></input>
            <input type="text" value={idPractitioner} onChange={handleChangePractitioner}></input>
            <button onClick={handleRegister}></button>
            {/* <Formik
                initialValues={{}}
                onSubmit={handleRegister}
            >
                <Form>
                    <Field name='email' type='email' />
                    <Field name='password' type='password' />
                    <Field name='idPractitioner' type='text' />
                    <button type='submit'>Register</button>
                </Form>
            </Formik> */}
        </div>
    )
}
