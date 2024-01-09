
function App() {
    let name = "John Cena";

    let fruits = ["Apple", "Mango", "Banana", "Pineapple"];

    let wrestler = {
        name: "Big Show",
        weight: "400 pounds",
        height:"200 cm"
    }

    let pokemon = [
        {name : "Pikachu", type : "electric"},
        {name : "Charmander", type : "fire"},
        {name : "Squirtle", type : "water"},
        {name : "Bulbasaur", type : "grass"},
        {name : "Gengar", type : "ghost"}
    ];

    const cricketers = ['sachin', 'ponting', 'dravid'];
    cricketers.push('kumble');



    return (
        <>
            <h1>{name}</h1>
            <h2>How are you?</h2>

            <ul>
                {
                    fruits.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>;
                        // Adding a key prop is important when using map in React
                    })
                }
            </ul>

            <h3>Big Show Profile</h3>
            <div>Name:{wrestler.name}</div>
            <div>weight:{wrestler.weight}</div>
            <div>Height:{wrestler.height}</div>

            <h3>List of Pokemon</h3>
            <ul>
                {
                    pokemon.map((item) => {
                        return <li>{item.name}-{item.type}</li>
                    })
                }
            </ul>

            <h3>List of cricketers</h3>
            <ul>
                {cricketers.map(item =>{
                    return <li>{item}</li>
                })}
            </ul>
        </>
    );
}

export default App;
