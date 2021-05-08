import React, { useEffect, useState } from 'react'
import { insertCarts } from './Redux/action/insertCarts';
import { compose } from 'redux';
import { connect } from 'react-redux';

function Cart(props) {
    const cartList = props.cartData.cart

    useEffect(() => {
        return () => {

        }
    }, [])

    const onAdd = async () => {
        try {
            const data = [...props.cartData.cart]
            const newData = 'indomi'
            data.push(newData)

            await props.dispatch(insertCarts({ cart: data }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {cartList.map((v, i) => {
                return <div key={i}>{v}</div>
            })}
            <button onClick={onAdd}>Tambah</button>
        </div>
    )
}


// ngambil state global dari store. diubah ke props
const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

export default compose(connect(mapStateToProps),)(Cart)

