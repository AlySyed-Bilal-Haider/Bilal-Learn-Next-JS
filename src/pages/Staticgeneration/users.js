import User from "../../components/user";
function Staticgen({ allPokemons }) {
  console.log("allPokemons", allPokemons);
  return (
    <>
      {allPokemons?.map(({ name }, index) => {
        return (
          <div key={index}>
            <User name={name} />
          </div>
        );
      })}
    </>
  );
}

export default Staticgen;

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return {
    props: { allPokemons: data.results },
  };
}
