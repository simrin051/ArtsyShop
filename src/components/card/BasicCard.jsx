import { RatingPalleteIcon } from "../index";

export const BasicCard = ({ item , children}) => {
  const {
    item_name,
    item_by,
    item_desc,
    item_original_price,
    item_price,
    item_rating,
  } = item;
  return (
    <div className="card w-30 basic">
      <button className="icon favourite-icon">
        <i className="fa-regular fa-heart fa-2x"></i>
      </button>
      <div className="content">
        <img
          className="card-img"
          src="https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2"
          alt=""
        />

        <div className="card-header">
          <h1>{item_name}</h1>
          <h2>by {item_by}</h2>
          <div className="card-body">{item_desc}</div>
          <RatingPalleteIcon rating={item_rating} />
          <div className="price-sec">
            <h3>${item_price}</h3>
            <span className="strike-price">${item_original_price}</span>
          </div>
        </div>
      </div>

      <div className="card-actions">
        {children}
      </div>
    </div>
  );
};
