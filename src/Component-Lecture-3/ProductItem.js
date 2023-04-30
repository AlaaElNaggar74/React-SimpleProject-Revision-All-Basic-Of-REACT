const ProductItem = (props) => {
  return (
    <div className="col-4 mb-3" >
      <div className="card ">
        <img
          src={props.product.image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.title.slice(0, 10)}</h5>
          <p className="card-text">{props.product.description.slice(0, 50)}</p>
          <a href="/#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
