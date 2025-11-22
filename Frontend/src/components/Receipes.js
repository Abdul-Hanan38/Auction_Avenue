"use client"
import React, { useEffect, useState } from 'react'

const Receipes = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
       <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>

    </div>
  )
}

export default Receipes