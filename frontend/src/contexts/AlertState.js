import { useState } from 'react';
import AlertContext from './AlertContext'

function AlertState(props){
    let [alert, setAlert] = useState(null);
    let showAlert = (message, type)=>{
        setAlert({message, type});
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    return(
        <AlertContext.Provider value={{alert, showAlert}}>
            {props.children}
        </AlertContext.Provider>
    );
}
export default AlertState;