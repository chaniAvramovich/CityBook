import React, { useState, useContext, useEffect } from 'react';
import { applicationContext } from '../App'


import { Child } from './Child';
import { postUser, getUser } from '../services/UserService';


export const Form = () => {

    const { user, setUser } = useContext(applicationContext)
    const [startdate, setStartDate] = useState(new Date());

    // useEffect(() => {
    //     const initlizeUser = async () => {
    //         const existUser = await getUser()
    //         if (!existUser) {
    //             return
    //         }
    //         const myUser = {
    //             firstName: existUser.firstName || "",
    //             lastName: existUser.lastName || "",
    //             identity: existUser.identity || "",
    //             dateOfBirth: existUser.dateOfBirth || "",
    //             kind: existUser.kind || "",
    //             HMO: existUser.HMO || "",
    //             childrens: existUser.childrens || []
    //         }

    //         setUser(myUser)
    //     }
    //     initlizeUser()
    // }, [])
    const onChangeForm = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser(newUser);
    }

    const addChild = () => {
        const newChild = { firstName: "", identity: "", dateOfBirth: "" }
        const newUser = { ...user }
        newUser.childrens.push(newChild)
        setUser(newUser)
    }

    const saveChild = (index, e) => {
        const newChildrens = user.childrens
        newChildrens[index][e.target.name] = e.target.value
        setUser({ ...user, childrens: newChildrens })
    }
    const submitHandler = (event, user) => {
        event.preventDefault();
        postUser(user);
    };

    return (
        <div className="container">
            <div className="row g-3">
                <div >
                    <h2> Personal Details:</h2>
                    <form onSubmit={(event) => submitHandler(event, user)} className="row g-3 form-group">
                        <div class="col-12">
                            <button type="submit" className="btn btn-outline-success btn-lg btn-block">Save Details</button>
                        </div>
                      
                        <div class="col-md-6">
                            <label >First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="firstName" placeholder="First Name"
                                defaultValue={user.firstName} required pattern="[a-z]{,15}"
                            />
                        </div>
                        <div class="col-md-6">
                            <label >Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastName" placeholder="Last Name"
                                defaultValue={user.lastName} pattern="[a-z]{,15}" required />
                        </div>
                       
                        <div class="col-12">
                            <label >Identity</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="identity" placeholder="identity"
                                defaultValue={user.identity} pattern="[0-9]{9}" required />
                        </div>
                        <div class="col-6">
                            <label className="form-check-label">Date of birth</label>
                            <input className="form-control" type="date" name="dateOfBirth" onChange={(e) => onChangeForm(e)}
                                defaultValue={user.dateOfBirth} required
                            />
                        </div>

                        <div class="col-md-6">
                            <label class="form-check-label" >HMO</label>
                            <select onChange={(e) => onChangeForm(e)} name="HMO" defaultValue={user.HMO} className="form-control" required>
                                <option name="HMO" value="meuchedet">Meuchedet</option>
                                <option name="HMO" value="Klalit">Klalit</option>
                                <option name="HMO" value="macabi">Macabi</option>
                                <option name="HMO" value="leumit">Leumit</option>
                            </select>
                        </div>
                       
                        <div class="col-md-6">
                            <label >kind</label>
                            <br />
                            <div  className="form-control"> 
                            <div class="form-check form-check-inline">
                                <input required type="radio" class="form-check-input" id="male" name="kind" value="male" onChange={(e) => onChangeForm(e)} checked={user.kind === "male"} />
                                <label class="form-check-label" for="male">male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" id="female" name="kind" value="female" onChange={(e) => onChangeForm(e)} checked={user.kind === "female"} />
                                <label class="form-check-label" for="female">female</label>
                            </div>
                            </div>
                        </div>

                        <div class="col-12 " >
                            <button type="button" onClick={(e) => addChild()} className="btn btn-danger">Add Child</button>
                            <br />
                        {user.childrens.map((child, index) => <Child key={index} onChange={saveChild} childIndex={index} initialValue={child} />)}
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}