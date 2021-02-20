import React from 'react';
import { Button } from '../../button/Button';
import { useHistory } from 'react-router-dom';

export const Left = () => {
  const { push } = useHistory();

  return (
    <>
      <div>
        <h1 className="left__header">Specializujeme se na vývoj produktů</h1>
        <p className="left__paragraph">
          Ty nejlepší firmy na trhu už CRM systémy nějakou tu dobu používají,
          ale není výjimkou, že se trápí zbytečně.
        </p>
        <div>
          <Button
            className="button--primary"
            textBtn="Kontaktujte nás"
            onClick={() => push('#')}
            type="button"
          />
        </div>
      </div>
    </>
  );
};
