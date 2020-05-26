import Link from 'next/link';

const Product = ( props ) => {

	const { product } = props;

	return (

			<div className="col-lg-3 col-md-6 col-sm-12 product-container" >
				<h5 className="card-subtitle text-center">{product.name ? product.name : ''}</h5>

				<Link as={`/product/${product.slug}`} 
				href={`/product?slug=${product.slug}`}>
					<a>
						<img
							src={ product.images[0].src } 
							alt="Product image"
							/>
					</a>
				</Link>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">£{ product.price }</h6>
				</div>

			</div>
	);
};

export default Product;
