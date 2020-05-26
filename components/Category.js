import Link from 'next/link';

const Category = ( props ) => {

	const { category } = props;

	return (

			<div className="col-lg-3 col-md-6 col-sm-12 category-container" >
				<h5 className="card-subtitle text-center">{category.name ? category.name : ''}</h5>

				{/* <Link as={`/category/${category.slug}-${category.categoryId}`} 
				href={`/category?slug=${category.slug}-${category.categoryId}`}>
					<a>
						<img
							src={ category.images[0].src } 
							alt="category image"
							/>
					</a>
				</Link>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">£{ category.price }</h6>
				</div> */}

			</div>
	);
};

export default Category;
