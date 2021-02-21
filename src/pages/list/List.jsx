import React, { useState, useEffect } from 'react';

import { Input } from '../../components/forms/input/Input';
import { Button } from './../../components/button/Button.jsx';
import { NavBar } from '../../components/navbar/NavBar';
import { Designer } from '../../components/designer/Designer';

export const List = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <>
      <NavBar showNavLinks={true} />
      <div></div>
      <div>
        <form>
          <Input
            type="search"
            value={search}
            placeholder="Váš email"
            setChanged={setSearch}
          />
          <Button
            className="button--primary"
            textBtn="Vyhledat"
            onClick={() => {}}
            type="submit"
          />
        </form>
      </div>
      <div>
        <Designer />
      </div>
    </>
  );
};
