import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/authentication/AuthContext";

function SignIn() {
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor='emailAddress'>
              Email:
              <input type="email" id='emailAddress' name='emailAddres' placeholder='Geef uw gebruikersnaam in' />
          </label>
          <label htmlFor='password'>
              Wachtwoord:
            <input type="password" name='password' placeholder='Insert your password' />
          </label>
        <button type='submit'>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;