import './styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <h1>Admin</h1>
            <label>
                Login: <br/>
                <input className='input-login' type='text'></input> <br/>
                Senha: <br/>
                <input className='input-login' type='password'></input>
            </label>
            <Link to={'/admin'} className='btn-padrao'>Acessar</Link>
        </div>
    )
}

export default Login;