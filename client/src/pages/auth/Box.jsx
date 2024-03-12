import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Box({ search }) {
    let [auth, setAuth] = useAuth()
    let navigate = useNavigate()
    let [otp, setOtp] = useState(new Array(6).fill(''))
    let inputRefs = useRef([])
    async function submitHandler() {
        try {
            let originalOtp = otp.join('')
            let { data } = await axios.post(`api/v1/otp-validate`, { otp: originalOtp, email: search })
            if (data.success) {
                toast(data.message)
                setAuth(data)
                navigate('/')

            }
            else {
                toast(data.message)

            }
        } catch (error) {
            toast(error.message)
        }
    }
    function changeHandler(e, i) {
        let { value } = e.target
        let newArray = [...otp]
        newArray[i] = value
        setOtp(newArray)
        //this is logic for move next
        if (value && i < otp.length - 1 && inputRefs.current[i + 1]) {
            inputRefs.current[i + 1].focus()
        }
    }

    function keypress(e, i) {
        if (e.key === "Backspace" && i > 0 && !otp[i] && inputRefs.current[i - 1]) {
            inputRefs.current[i - 1].focus()
        }
    }
    useEffect(() => {
        inputRefs.current[0].focus()
    }, [])
    return (
        <React.Fragment>
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div className="row">
                   
                <div className="col-md-12 d-flex justify-content-center gap-2">
                    {otp.map((item, i) => {
                        return  <input type='text' style={{ height: '55px', width: "55px" }}
                            maxLength={1}
                            onChange={(e) => {
                                changeHandler(e, i)
                            }}
                            ref={(input) => {
                                inputRefs.current[i] = input
                            }}
                            onKeyDown={(e) => {
                                keypress(e, i)
                            }}
                        />
                    })}
                </div>
                <button className='btn btn-primary' style={{width:"150px",margin:"15px",marginLeft:"380px"}} onClick={submitHandler}>submit</button>
            </div>
        </div>
    </React.Fragment>
    
    )
}

export default Box