import { useMemo, useState } from 'react'
import { ItemCard } from './components/ItemCard.jsx'
import {Footer} from "./components/Footer.jsx"
import { initialItems } from './data/items.js'

export default function App(){
  const [items, setItems] = useState(initialItems)
  const [query, setQuery] = useState('')

  const favorites = useMemo(()=> items.filter(i=> i.favorited).length, [items])

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return items
    return items.filter(i =>
      i.title.toLowerCase().includes(q)
    )
  }, [items, query])

/*  FILTRA POR QUAQUER TEXTO NA PAGINA  
    const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return items
    return items.filter(i =>
      i.title.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q)
    )
  }, [items, query])*/

    function toggleFavorite(id) {
    setItems(prev =>
        prev.map(item => {
        if (item.id !== id) return item;
        return { ...item, favorited: !item.favorited };
        })
    );
    }

  return (
    <main id="main">
      <header>
        <div className="titulo">
          <h1 >Mangás favoritos da Mary 2026.1</h1>
          <p>Projetinnhoooo de revisão em React</p>
        </div>
        <div>
          <article className="badge" ><p>Favys: {favorites}</p></article>
        </div>
      </header>

      <section className="inputis">
        <label for="busca"><h2>Buscar</h2></label>
        <input
          id="busca"
          type="text"
          placeholder="Buscar por titulo..."
          value={query}
          onChange={e=> setQuery(e.target.value)}
        />
      </section>

      <section className="grid">
        {filtered.map(item => (
          <ItemCard key={item.id} item={item} onToggle={()=> toggleFavorite(item.id)} />
        ))}
      </section>

      {filtered.length === 0 && (
        <p role="status">Nenhum item encontrado para o filtro informado.</p>
      )}

      <Footer/>
    </main>
  )
}
