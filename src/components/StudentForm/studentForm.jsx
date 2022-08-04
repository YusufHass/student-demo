import { useState } from "react";

const defaultValues= {
    firstName: '',
    lastName: '',
    age:'',
    major: ''
}
const StudentForm =()=>{

    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [age, setAge]= useState('');
    const [major, setMajor]= useState('');


    const handleOnChanges= (event)=>{
        setFirstName(event.target.value);
        //now it sets both firstName and lastName the same value since they use the
        //same handleChanges
        setLastName(event.target.value);

        
    }
    const handleAges= (event)=>{
        setAge(event.target.value)
    }
    return (

    <form>
        <div>
        <label>First Name</label>
        <input type='text' value={firstName} onChange={handleOnChanges}></input>
       </div>
       <div>
        <label>Last Name</label>
        <input type='text' value={lastName} onChange={handleOnChanges}></input>
        </div> <div>
        <label>Age</label>
        <input type='text' value={age} onChange={handleAges}></input>
        </div>
        <div>
        <label>Major</label>
        <input type='text' value={major} onChange={handleOnChanges}></input>
        </div>
        <h1>{age}</h1>
        </form>
    );


}
export default StudentForm;