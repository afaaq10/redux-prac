import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductReducer from '../redux/reducers/productReducer'

const ProductComponents = () => {

    const products = useSelector((state) => state.productReducer.product)
    const renderList = products.map((x) => {
        console.log("this is a product", products)
        const { id, title, image, description, price, category,rating } = x
        
      
        return (
            <>
            <div className="four wide column" key={id}>
              {{id} == 0 ? (
           
           <div style={{ display: "flex", margin: "auto", position: "relative", top: "105px", fontSize: "30px", padding: "10px", color: "blue", padding:"8px",   }}>
               <div>
               <i style={{position:"relative", top:"20px"}} class="fa fa-refresh fa-spin" />
                 <p style={{justifyContent: "space-between",position:"relative", top:"80px"}}> ...Loading</p> 
               {/* <i className="fa fa-cog fa-spin" /> */}
             
               </div>
              
           </div>
           
       ) : (
        
            
                 <Link to={`/products/${id}`}>

              
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
                                <div >
                                  Rating:  {rating.rate}/5
                                </div>
                            </div>
                        </div>
                    </div>
             



         </Link>  
       
       )}
       </div>
        </>
     
               
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
