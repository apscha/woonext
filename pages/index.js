import Layout from "../components/Layout";
import Product from "../components/Product";
import Category from "../components/Category";
import fetch from 'isomorphic-unfetch';
import clientConfig from '../clientConfig';

const Index = ( props ) => {
	const { products, categories } = props;
	console.log(products, "Products")
   // console.log(categories, "Categories")

	return (
			<Layout>

                <h2 className="mt-5 text-center">Categories</h2>
				<div className="product-container row">
					{ categories.length ? (
						categories.map( category => <Category key={ category.id } category={ category }/> )
					) : '' }
				</div>

				<h2 className="mt-5 text-center">Products</h2>
				<div className="product-container row">
					{ products.length ? (
						products.map( product => <Product key={ product.id } product={ product }/> )
					) : '' }
				</div>
			</Layout>
	)
};

Index.getInitialProps = async () => {
const res = await fetch (`${clientConfig.siteUrl}/getProducts`);
const productsData = await res.json();

const resCat = await fetch (`${clientConfig.siteUrl}/getCategories`);
const categoriesData = await resCat.json();

return {
	products: productsData,
	categories: categoriesData
}
};

export default Index;
