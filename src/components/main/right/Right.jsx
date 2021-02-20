import react, { useState } from 'react';
import { Input } from '../../forms/input/Input';
import { Checkbox } from '../../forms/checkbox/Checkbox';
import { Button } from '../../button/Button';

export const Right = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  return (
    <div>
      <h2 className="right_header">Přihlaste se</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          {
            email === '' || password === '' || !terms ? (
              <p>Vyplňte, prosím, všechna pole.</p>
            ) : (
              console.log(email, password, terms)
            );
          }
        }}
      >
        <Input
          type="text"
          value={email}
          placeholder="Váš email"
          setChanged={setEmail}
        />
        <Input
          type="password"
          value={password}
          placeholder="Heslo"
          setChanged={setPassword}
        />
        <Checkbox
          text="Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajlů."
          checked={terms}
          setChecked={setTerms}
        />
        <Button
          type="submit"
          className="button--primary"
          textBtn="Přihlásit se"
          onClick={() => {}}
        />
      </form>
    </div>
  );
};
