import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/authentication/AuthContext";

function SignUp() {
    const { signUp } = useContext(AuthContext);

    function handleSubmit() {
        console.log('Button is clicked');
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleSubmit}>
          <label htmlFor='userName'>
              Gebruikersnaam:
              <input type='text' id='userName' name='userName' placeholder='Geef uw gebruikersnaam in' />
          </label>
          <label htmlFor='emailAddress'>
              Email:
              <input type="email" id='emailAddress' name='emailAddres' placeholder='Geef uw gebruikersnaam in' />
          </label>
          <label htmlFor='password'>
              Wachtwoord:
              <input type="password" name='password' placeholder='Insert your password' />
          </label>
          <button type='submit'>Registreren</button>

      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;