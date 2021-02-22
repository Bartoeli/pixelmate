import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Detail = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState('1');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return <></>;
};
