import React from 'react'

function Input({onChange,name,value,label,error,type}) {
    return (
        <div>
             <div className="form-group">
                      <label id={name} htmlFor={name}>{label}</label>
                      <input  value={value} autoFocus 
                      type={type}
                      name= {name}
                      onChange={onChange}
                    className="form-control"/>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input
