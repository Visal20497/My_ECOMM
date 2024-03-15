import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

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
    
        const [seconds, setSeconds] = useState(60);
        const [isActive, setIsActive] = useState(true);
        useEffect(() => {
          let interval;
          if (isActive && seconds > 0) {
            interval = setInterval(() => {
              setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000); // Update every second
          } else if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            navigate('/otp')
          }
          return () => clearInterval(interval);
        }, [isActive, seconds]);  
        const formatTime = (time) => {
          const minutes = Math.floor(time / 60);
          const seconds = time % 60;
          return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };
    return (
        <React.Fragment>
       <Layout title='login -Ecom'>
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
                
                <h4 className='text-center'>OTP Expire In :{formatTime(seconds)}</h4>
                <button className='btn btn-primary' style={{width:"150px",margin:"15px",marginLeft:"500px"}} onClick={submitHandler}>submit</button>
            </div>
        </div>
       </Layout>
    </React.Fragment>
    
    )
}

export default Box