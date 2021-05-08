import React, { useState } from 'react'

function Cart() {
    const [cartList, setCartList] = useState([
        'ayam',
        'bakso',
        'kangkung',
        'bayam',
        'sosis'
    ])

    const onAdd = () => {
        const data = [...cartList]
        const newData = 'indomi'
        data.push(newData)
        setCartList(data)
    }
    
    return (
        <div>
            {cartList.map((v,i)=>{
                return <div>{v}</div>
            })}
            <button onClick={onAdd}>Tambah</button>
        </div>
    )
}

export default Cart
