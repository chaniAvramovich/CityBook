
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';

export const Child = ({initialValue, onChange, childIndex}) => {
    return (
        <div>
            <div className="row ">
                <div  class="col-md">
                    <label>First Name</label>
                    <input type="text"  className="form-control" name="firstName" onChange={(e)=>onChange(childIndex, e)} placeholder="First Name"
                    defaultValue={initialValue.firstName} required />
                </div>
                <div  class="col-md">
                    <label>identity</label>
                    <input type="text"  className="form-control" name="identity" onChange={(e)=>onChange(childIndex, e)} placeholder="identity"
                    defaultValue={initialValue.identity}  pattern="[0-9]{9}" required/>
                </div> 
                  <div class="col-md">
                  <label >Date of birth</label>
                    <input type="date" className="form-control" name="dateOfBirth" onChange={(e) =>onChange(childIndex, e)}
                    defaultValue={initialValue.dateOfBirth} required />
                </div>
            </div>
        </div>
    )
}