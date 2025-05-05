import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";
import "../App.scss";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data.slice(0, 20)); // ✅ Solo los primeros 20 personajes
            } catch (error) {
                console.error("Error al obtener personajes:", error);
            }
        };


        getCharacters(); // 👈 ¡Aquí se ejecuta correctamente!

    }, []);

    return (
        <div className="App">
          {characters.length > 0 ? (
            <ul className="character-list">
              {characters.map((character) => (
                <li key={character.id} className="character-card">
                  <img
                    src={character.image}
                    alt={`Retrato de ${character.name}`}
                    height="200"
                    width="200"
                  />
                  <h2>{character.name}</h2>
                </li>
              ))}
            </ul>
          ) : (
            <p>Cargando personajes...</p>
          )}
        </div>
      );
      
};

export default Characters;