import React from 'react'

function Receipt(props) {

    let subTotal = 0
    props.tagInfo.toyInfo.forEach((toy) => {
        subTotal += toy.price
    })

    let tax = (subTotal * .07).toFixed(2)
    console.log(typeof tax)

  return (
    <div className='ticket'>
        <div className="heading">
            <h1>Customer: <span>{props.tagInfo.customer}</span></h1>
            <h4>Order: <span>{props.tagInfo.order}</span></h4>
        </div>

        <div className='toyContainer'>
            <div className='left'>
                <h5>ITEM</h5>
                {props.tagInfo.toyInfo.map((info) => {
                    return (
                        <li className='list'>{info.toy}</li>
                    )
                })}
            </div>
            <div className='right'>
                <h5>PRICE</h5>
                {props.tagInfo.toyInfo.map((info) => {
                    return(
                        <li className='list'>${(info.price).toFixed(2)}</li>
                    )
                })}
            </div>
        </div>
        <div className="totalsContainer">
            <div className="sub">
        <p className='totalTitle'>Subtotal:</p>
        <p>${subTotal}.00</p>
            </div>
            <div className="tax">
        <p className='totalTitle'>Tax:</p>
        <p>${tax}</p>
            </div>
            <div className="total">
        <p className='totalTitle'>Total:</p>
        <p>${(subTotal + +tax).toFixed(2)}</p>
            </div>
        </div>

    </div>
  )
}

export default Receipt
