import Layout from "../components/Layout";
const Categories = ( props ) => {

	const { productCategories } = props;

	return (
		<Layout>
			{/*Categories*/}
			<div className="mt-5 text-center content-wrap">
				<h2>Categories</h2>
				<ParentCategoriesBlock productCategories={ productCategories }/>
			</div>
		</Layout>
	)
};

Categories.getInitialProps = async () => {

	const result = await client.query({
		query: GET_CATEGORIES_QUERY,
	});

	return {
		productCategories: result.data.productCategories.nodes,
	}

};

export default Categories;
