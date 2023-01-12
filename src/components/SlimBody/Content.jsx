function ContentItem({ item }) {
  return (
    <li className="nav-item">
      <div className="nav-link">
        <div className="smallTitle">{item.smallTitle}</div>
        <p>{item.paragraph}</p>
        <img src={item.img} alt="" width="100%" />
        <div className="copy">{item.copy}</div>
      </div>
    </li>
  );
}
export default function Content({ items = [], bigTitle = "" }) {
  return (
    <>
      <h1>{bigTitle}</h1>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {items.map((item, index) => (
          <ContentItem item={item} key={`menu-item-${index}`} />
        ))}
      </ul>
    </>
  );
}
