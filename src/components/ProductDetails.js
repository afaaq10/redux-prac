import React from 'react'
import axios from 'axios'
import { selectedProduct, removeSelectedProduct } from '../redux/action/productAction'
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
    async function details() {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {

    }, [])

    useEffect(() => {
        details()
        return () => {
            dispatch(removeSelectedProduct())
        };
    }, [productId])

    return (
        <div className="ui fixed menu">
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
        </div>
    )
}
export default ProductDetails
