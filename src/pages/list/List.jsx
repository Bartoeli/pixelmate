import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './list.scss';

import { Input } from '../../components/forms/input/Input';
import { Button } from './../../components/button/Button.jsx';
import { NavBar } from '../../components/navbar/NavBar';
import { Designer } from '../../components/designer/Designer';
import { Footer } from '../../components/footer/Footer';

export const List = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [data, setData] = useState([]);
  let { key } = useParams();

  console.log(key);

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

  useEffect(() => {
    const results = designers.filter((designer) =>
      designer.name.toLowerCase().includes(search),
    );
    setSearchResult(results);
  }, [search]);

  return (
    <>
      <div className="list">
        <NavBar showNavLinks={true} />
        <div className="list__placeholder"></div>
        <div className="list__form">
          <form
            className="list__form-form"
            onSubmit={(e) => {
              e.preventDefault();
              return searchResult;
            }}
          >
            <div className="list__form-search">
              <Input
                type="search"
                value={search}
                placeholder="Hledat"
                setChanged={setSearch}
              />
            </div>
            <div className="list__form-button">
              <Button
                className="button--primary"
                textBtn="Vyhledat"
                onClick={() => {}}
                type="submit"
              />
            </div>
          </form>
        </div>
        <div className="list__designers">{designers}</div>
        <Footer />
      </div>
    </>
  );
};
