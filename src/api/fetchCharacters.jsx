

export async function fetchCharacters() {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        return data || []; // Retorna un array vacío en caso de que `data` sea `undefined`

    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return []; // Retorna `[]` para evitar fallos en `map()`
    }
}