import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from '../StarRating';
import styles from './index.scss';

const App = () => {

  const handleOnClick = (rating: number) => {
    console.log(rating);
  };

  return (
    <>
      <StarRating
        handleOnClick={handleOnClick}
        isHalfRating={true}
        isReadOnly={true}
        initialRating={4.5}
        starClassName={styles.customStar}
        containerClassName={styles.container}
      />
      <StarRating
        handleOnClick={handleOnClick}
        isHalfRating={true}
        containerClassName={styles.container}
      />
    </>
  )
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
