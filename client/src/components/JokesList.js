import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const JokesList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosWithAuth().get('/api/jokes');
        console.log(res.data);
        setJokes(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setJokes]);

  return (
    <div>
      {jokes.map(({ id, joke }) => (
        <div key={id}>
          <h2>{joke}</h2>
        </div>
      ))}
    </div>
  );
};

export default JokesList;
