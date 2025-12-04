import {useState} from 'react'
import Input from './Input';


export default function Login() {

//const [entereredEmail,setEnteredEmail]=useState('');
//const [enteredPassword,setEnteredPassword]=useState('')

const [enteredValues,setEnteredValues]=useState({
email:'',
password:''
});
const [didEdit,setDidEdit]=useState({
  email:false,
  password:false
})
const emailIsInvalid=didEdit.email && !enteredValues.email.includes('@')
const passwordIsInvalid=didEdit.password && enteredValues.password.trim().length<6;
function handleSubmission(e){
  e.preventDefault();
 

  setEnteredValues({
    email:'',
password:''
  })
 

}

// function handleEmailChange(event){
// setEnteredEmail(event.target.value);
// }

function handleInputChange(identifier,value){
setEnteredValues((prevValues)=>({
  ...prevValues,
[identifier]:value
}
))
setDidEdit((prevEdit)=>({
...prevEdit,
[identifier]:false
}))

}

function handleInputBlur(identifier){
setDidEdit((prevEdit)=>({
  
  ...prevEdit,
  [identifier]:true
}))
}
  return (
    <form onSubmit={handleSubmission}> 
      <h2>Login</h2>

      <div className="control-row">
<Input 
 label="email"
 id="email"
 type="email" 
 name="email"
 onBlur={()=>handleInputBlur('email')}
 onChange={(event)=>handleInputChange('email',event.target.value)} 
 value={enteredValues.email}
   error={emailIsInvalid && 'please enter a valid email'}        
           />
<Input 
 label="password"
 id="password"
 type="password"
 name="password"
 onBlur={()=>handleInputBlur('password')}
 onChange={(event)=>handleInputChange('password',event.target.value)} 
           value={enteredValues.password} 
    error={passwordIsInvalid && 'please enter a valid password'}       
           />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
