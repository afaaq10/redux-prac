import React from 'react'
import axios from 'axios'
import { fetchProduct, removeSelectedProduct } from '../redux/action/productAction'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const ProductDetails = () => {
    const prod = useSelector((state) => state.selectedProduct)
    const { id, title, image, description, price, category } = prod

    const { productId } = useParams()
    console.log(productId)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProduct(productId))
        return () => {
            dispatch(removeSelectedProduct())
        };
    }, [productId])

    return (
        <div className="ui fixed menu">
            {Object.keys(prod).length === 0 ? (
                <div style={{ margin: "auto", padding: "10px", color: "blue" }}>...Loading</div>
            ) : (

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

                )
            }
        </div>
    )

}
export default ProductDetails
