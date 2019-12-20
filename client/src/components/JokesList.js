import React, { useEffect, useState } from 'react';

const JokesList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosWithAuth().get('/api/jokes');
        setJokes(res.data);
      } catch (error) {
        console.error(err);
      }
    })();
  });

  return (
    <div>
      {jokes.map(joke => (
        <div key={joke.id}>
          <h2>{joke.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default JokesList;
