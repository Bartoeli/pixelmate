import react, { useState } from 'react';
import { Input } from '../../forms/input/Input';
import { Checkbox } from '../../forms/checkbox/Checkbox';
import { Button } from '../../button/Button';

import './right.scss';

export const Right = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  return (
    <div className="right">
      <div className="right__box">
        <h2 className="right__header">Přihlaste se</h2>
        <form
          className="right__form"
          onSubmit={(e) => {
            e.preventDefault();
            {
              email === '' || password === '' || !terms
                ? console.log('Všechna pole jsou povinná.')
                : console.log(email, password, terms);
            }
          }}
        >
          <div className="right__input">
            <Input
              type="text"
              value={email}
              placeholder="Váš email"
              setChanged={setEmail}
            />
          </div>
          <div className="right__input">
            <Input
              type="password"
              value={password}
              placeholder="Heslo"
              setChanged={setPassword}
            />
          </div>
          <div className="right__input">
            <Checkbox
              text="Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajů."
              checked={terms}
              setChecked={setTerms}
            />
          </div>
          <div className="right__button">
            <Button
              type="submit"
              className="button--primary"
              textBtn="Přihlásit se"
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
