import React from 'react'
import ProductComponent from './ProductComponent'
import { setProduct } from '../redux/action/productAction'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
const ProductListing = () => {
    const dispatch = useDispatch()
    async function pro() {

        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log('err', err))
        console.log(response.data)
        dispatch(setProduct(response.data))
    }

    useEffect(() => {
        pro()
    }, [])
    return (

        <div className="ui grid container">
            <ProductComponent />
        </div>

    )
}
export default ProductListing
