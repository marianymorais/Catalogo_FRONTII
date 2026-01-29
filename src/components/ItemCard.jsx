
export function ItemCard({ item, onToggle }) {
  return (
    <article className="card" aria-label={item.title}>
      <div>
        <h3>{item.title}</h3>
        <p >{item.description}</p>
        <figure className="imagens">
            <img alt={item.title} src={item.imga} />
        </figure>
      </div>
      <div className="botoes">
        <button
          className="toggle"
          aria-pressed={item.favorited ? 'true' : 'false'}
          onClick={onToggle}
        >
          {item.favorited ? 'Favoritado' : 'Favoritar'}
        </button>
        {item.tag && <span className="badge">{item.tag}</span>}
      </div>
    </article>
  )
}
