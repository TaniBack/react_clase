import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Topic = () => {

  const [value, setValue] = useState("reactjs");   // value state: obtendra el valor del input . Por defecto tiene "reactjs"
  const [posts, setPosts] = useState([]);   // Estado para guardar la data del fetch (inicialmente vacía )

  // Uso del useEffect para la actualizacion del estado cuando se busque una nueva palabra (equivale a un componentDidiUpdate)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://www.reddit.com/r/${value}.json`);
        const json = await res.json();

        // Actualizamos el array de posts el resultado del json 
        setPosts(json.data.children.map(c => c.data))
  }catch(e){
      console.log("error" + e)
      setPosts([]); //Si hay error en la busqueda , vaciamos el state de Post 
    }      
  }
    fetchData();
    //Re-run de useEffect con nuevo value 
  }, [value]);

  // Update the value when the user presses enter
  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.topicValue.value); //Para acceder a unico input de form 
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="topicValue" />
      </form>

      <p>Palabra buscada {value}</p>

      {posts.length === 0 ? "No hemos encontrado posts de:" + value 
        : 
        <ul className="topic">
          {posts.map(post => (<li key={post.id} className="topic">{post.title}</li>
          ))}
        </ul>
      }
    </>
  )
};

export default Topic;
