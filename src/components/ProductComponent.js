import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductReducer from '../redux/reducers/productReducer'
const ProductComponents = () => {
    const products = useSelector((state) => state.productReducer.product)
    const renderList = products.map((x) => {
        console.log("this is a product", x)
        const { id, title, image, description, price, category } = x
        return (
            <div className="four wide column" key={id}>
                <Link to={`/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} /> </div>
                            <div className="content">
                                <div className="header">
                                    {title}
                                </div>
                                <div className="meta price">
                                    ${price}
                                </div>
                                <div className="meta">
                                    {category}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
    )

    return (
        <>
            {renderList}
        </>
    )
}
export default ProductComponents
