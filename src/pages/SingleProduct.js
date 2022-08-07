import { Link, useParams } from "react-router-dom";
import products from "../data";
// useParams() returns keyboard,value pair of params from url
const SingleProduct = () => {
  console.log(useParams());
  const { productID } = useParams();
  const product = products.find((product) => product.id === productID);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products" className="btn">
        back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
