import React from 'react'
import ProductComponent from './ProductComponent'
import { fetchProduct } from '../redux/action/productAction'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
const ProductListing = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    return (

        <div className="ui grid container">
            <ProductComponent />
        </div>

    )
}
export default ProductListing
