const Dish = ({id, tittel, kategori, ingredienser, pris}) => {
  return (
    <div className="dish-card border">
      <p className="small-text">Rett nummer{id}</p>
      <h2>{tittel}</h2>
      <p>{pris}</p>
      <p className="small-text">{ingredienser}</p>
      <p className="small-text">{kategori}</p>
    </div>
  );
};
export default Dish;
