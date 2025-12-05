import Input from './Input';
import {isEmail,isEmpty,hasMinLength} from '../util/validation.js'
import { useInput } from '../hooks/useInput.js';
export default function Login() {

  const {
  value:emailValue,
  handleInputChange:handleEmailChange,
  handleInputBlur:handleEmailBlur,
  hasError:EmailHasError
}=useInput('',(value)=> isEmail(value) && isEmpty(value));

const {
  value:passwordValue,
  handleInputChange:handlePasswordChange,
  handleInputBlur:handlePasswordBlur,
  hasError:passwordHasError
}=useInput('',(value)=>hasMinLength(value,6))



function handleSubmission(e){
  e.preventDefault();
  if(EmailHasError||passwordHasError){
    return;
  }

console.log(emailValue,passwordValue);
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
 onBlur={handleEmailBlur}
 onChange={handleEmailChange} 
 value={emailValue}
   error={EmailHasError && 'please enter a valid email'}        
           />
<Input 
 label="password"
 id="password"
 type="password"
 name="password"
 onBlur={handlePasswordBlur}
 onChange={handlePasswordChange} 
           value={passwordValue} 
    error={passwordHasError && 'please enter a valid password'}       
           />

      </div>

      <p className="form-actions">
        <button className="button button-flat" id='Reset'>Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
