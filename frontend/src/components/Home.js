import React, { useContext, useEffect } from 'react'
import Resume from './Resume'
import ResumeContext from '../contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../contexts/AlertContext';

export default function Home() {
  let token = localStorage.getItem("token");
  let {fetchUser} = useContext(ResumeContext);
  let navigate = useNavigate();
  let {showAlert} = useContext(AlertContext);
  let res = {};
  useEffect(() => {
    (async()=>{
      if(token){res = await fetchUser(token);}
      if(!res.success){
        showAlert("Please Login!", "info");
        navigate("/login");
      }
      // eslint-disable-next-line
    })();
  }, [])
  
  return (
    <>
    {token && <Resume />}
    </>
  )
}
