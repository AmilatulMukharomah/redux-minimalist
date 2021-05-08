import React from 'react'

function Login({onLogin}) {

    const signIn = (e) => {
        e.preventDefault()
        onLogin()
    }
    
    return (
        <div>
            <form onSubmit={(e)=> signIn(e)} style={{display:'flex', flexDirection:'column', width:'300px'}}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
