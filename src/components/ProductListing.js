import React from 'react'
import ProductComponent from './ProductComponent'
import { fetchProducts } from '../redux/action/productAction'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
const ProductListing = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (

        <div className="ui grid container">
            <ProductComponent />
        </div>

    )
}
export default ProductListing
