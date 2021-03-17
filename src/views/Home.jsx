import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {SignOut} from '../action/auth.action'

const Home = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector(state =>state.authReducer)
    console.log(isLoggedIn);
    if (!isLoggedIn) {
        history.push("/")
        return <p>Please Login!</p>
    }
    return (
        <div>
            <h1>THis is home after auth</h1>
            <button onClick={() =>{
                dispatch(SignOut())
            }} >SIgnOut</button>
        </div>
    )
}

export default Home
