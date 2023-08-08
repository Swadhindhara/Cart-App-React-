import { Link } from 'react-router-dom';

const Product = (props) => {

    const productName = props.product.title;
    const price = `₹ ${props.product.price}`;
    let finalProductName = productName
    if (productName.length > 30) {
        finalProductName = productName.substr(0, 31);
        const dot = "..."
        finalProductName = finalProductName.concat(dot)
    }

    return (
        <Link to= {`/product/${props.product.id}`}>
            <div className="card md:w-[250px] bg-[#ffffff] w-[180px] flex flex-col justify-center items-center max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="h-[250px] flex items-center"><img className="w-[130px]" src={props.product.image} alt="pizza" /></div>
                <div className="h-[50px] flex items-start justify-center text-center px-4"><h2 className="text-lg font-bold py-2 ">{finalProductName}</h2></div>
                <div className="bg-[#ffffff] mt-[45px] md:mt-[30px] flex items-center justify-center"><span className="bg-gray-200 py-1 rounded-full text-sm px-4 ">Rating {props.product.rating.rate}</span></div>
                <div className="flex flex-row justify-between items-center mt-4 mb-2">
                    <span className=" md:ml-[-30%] ml-[-10%]">{price}</span>
                    <button className="bg-[#f59e0d] py-1 px-4 rounded-full font-bold mr-[-10%] md:mr-[-30%]">Add</button>
                </div>
            </div>
        </Link>
    )
}

export default Product