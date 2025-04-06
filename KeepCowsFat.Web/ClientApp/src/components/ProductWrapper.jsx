import ProductPage from "./Product";
import RefSheet from "./RefSheet";

export default ProductWrapper = (product) => {

    const [showRefSheet, setShowRefSheet] = useState(true);

    return (
        <div>  
            <ProductPage product={product} />
            <RefSheet open={showRefSheet} handleClose={setShowRefSheet(false) } />
        </div>
    )
};