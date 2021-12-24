import React from 'react'

// && is same as c++ && if first is false do not check second
function ALert(props) {

    const capitalize = (word)=>{
        const lower = word;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height : '50px'}}>   
         {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
    )
}

export default ALert
