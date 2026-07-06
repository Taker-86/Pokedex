import { useState } from 'react';

const features = [
  'React + Vite',
  'Tailwind CSS',
  'Frontend-Only Struktur',
  'Schnell startbar',
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemon, setPokemon] = useState({
    name: '',
    id: '',
    types: [],
    image: '',
  });

  async function fetchData() {
    const pokemonNameOrId = searchValue.trim().toLowerCase();

    if (!pokemonNameOrId) {
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);

      if (!response.ok) {
        throw new Error('Pokemon nicht gefunden');
      }

      const data = await response.json();

      setPokemon({
        name: data.name,
        id: data.id,
        types: data.types.map((type) => type.type.name),
        image: data.sprites.front_default,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
          Poke-Api
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Pokedex App
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
          Finde Informationen zu allen Pokémon, die du suchst. Mit dieser App kannst du schnell und einfach auf die Poke-Api zugreifen und die gewünschten Daten abrufen.
        </p>

        <div className="mt-10 grid w-full gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left shadow-2xl sm:grid-cols-2">
          <input
            id="pokemon-input"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-800/50 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring focus:ring-cyan-400/20"
            placeholder="Pokemon Name or ID"
          />
          <button
            className="w-full rounded-md bg-cyan-400/10 px-3 py-2 text-slate-100 hover:bg-cyan-400/20 focus:outline-none focus:ring focus:ring-cyan-400/20"
            onClick={fetchData}
          >
            Suchen
          </button>
        </div>

        <section className="mt-6 w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-100">Übersicht</h2>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
              Vorschau
            </span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-[140px_1fr]">
            <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/80 text-sm text-slate-500">
              {pokemon.image ? (
                <img src={pokemon.image} alt={pokemon.name || 'Pokemon'} className="h-24 w-24 object-contain" />
              ) : (
                'Bild kommt später'
              )}
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-sm text-slate-400">Name</p>
                <p className="mt-1 font-semibold text-slate-100">{pokemon.name || '—'}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-sm text-slate-400">ID</p>
                <p className="mt-1 font-semibold text-slate-100">{pokemon.id || '—'}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-sm text-slate-400">Typ</p>
                <p className="mt-1 font-semibold text-slate-100">
                  {pokemon.types.length > 0 ? pokemon.types.join(', ') : '—'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
