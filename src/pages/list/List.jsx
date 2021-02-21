import React, { useState, useEffect } from 'react';

import { Input } from '../../components/forms/input/Input';
import { Button } from './../../components/button/Button.jsx';
import { NavBar } from '../../components/navbar/NavBar';
import { Designer } from '../../components/designer/Designer';
import { Footer } from '../../components/footer/Footer';

export const List = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const keyList = [
    'username',
    'name',
    'email',
    'street',
    'suite',
    'city',
    'zipcode',
    'id',
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  const designers = [];
  for (const value of data) {
    designers.push(
      <Designer
        key={value.id}
        username={value.username}
        name={value.name}
        email={value.email}
        street={value.address.street}
        city={value.address.city}
        zipcode={value.address.zipcode}
        suite={value.address.suite}
      />,
    );
  }

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
      <div>{designers}</div>
      <Footer />
    </>
  );
};
