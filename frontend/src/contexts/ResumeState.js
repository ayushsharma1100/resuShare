import React, { useState } from 'react'
import ResumeContext from './ResumeContext'

export default function ResumeState(props) {
    let [resume, setResume] = useState([]);
    let fetchAllNotes = async()=>{
        let response = await fetch('http://localhost:5500/api/notes/fetchallnotes', {
            method: "GET"
        })
        response = await response.json();
        setResume(response.notes);
        if(response.success){return response;}
        else{return {success: false}}
        
    }
    let addResume = async(formData, token)=>{
      let response = await fetch('http://localhost:5500/api/notes/addnote', {
            method: "POST",
            body: formData,
            headers: {
                "auth-token": token
            }
        })
      return await response.json();
    }
    let fetchUser = async(token)=>{
      let response = await fetch("http://localhost:5500/api/auth/getuser", {
        method: "POST",
        headers: {
          "auth-token": token
        }
      })
      return await response.json();
    }
  return (
    <ResumeContext.Provider value={{resume, fetchAllNotes, addResume, fetchUser}}>
        {props.children}
    </ResumeContext.Provider>
  )
}
