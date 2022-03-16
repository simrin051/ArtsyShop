import { useEffect } from "react";
import { TextOverMediaCard } from "../../components";
import { useProductContext } from "../../context";
import { useAxios } from "../../custom_hooks/useAxios";
import "./product_page.css";

export const ProductPage = () => {
  const { productState, productDispatch } = useProductContext();

  const products = useAxios("api/products", "GET", "products");
  useEffect(() => {
    productDispatch({ type: "ADD_PRODUCT_LIST", payload: products });
  }, [products]);

  const { productList } = productState;

  return (
    <main className="main">
      {/*  header section  */}
      <section className="page-header-section">
        <div className="section-bg">
          <img
            src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg"
            alt=""
          />
        </div>
        <div className="section-content">
          <h1>Nature Painting</h1>
        </div>
      </section>

      {/* menu section */}
      <section className="menu-sec">
        <div className="main-drop category-dropdown">
          <h4>Painting Category</h4>
          <button className="btn dropdown-box">
            Nature
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <div className="dropdown">
            <div>Street life</div>
            <div>Nature</div>
            <div>Landscape</div>
            <div>Abstraction</div>
          </div>
        </div>

        {/*  */}
        <div className="price-sec">
          <h3>Price</h3>
          <div>
            <input type="range" min="0" max="1000" step="50" />
            <span>{}</span>
          </div>
        </div>

        {/*  sort by dropdown  */}
        <div className="dropdown-container sortBy-con">
          <button className="btn dropdown-btn">
            Sort By
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <div className="dropdown">
            <div className="body-md">
              <b>Relevance</b>
            </div>
            <div className="body-md">
              <b>Popularity</b>
            </div>
          </div>
        </div>
      </section>

      {/* products section */}
      <section className="products-sec">
        <div className="grid-3 products-grid">
          {productList.map((i) => {
            return <TextOverMediaCard key={i._id} item={i} />;
          })}
        </div>
      </section>
    </main>
  );
};
