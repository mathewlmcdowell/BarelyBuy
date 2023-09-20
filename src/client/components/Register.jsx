import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Register () {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [emailerror, setemailerror] = useState(null);
    const [passworderror, setpassworderror] = useState(null);

    const navigate = useNavigate();
    

    const registerUser = async (event) => {
        event.preventDefault();

        if (email.length < 6) {
            setemailerror("Username must be at least 6 characters in length");
            return;
          } else {
            setemailerror(null);
          }
          
          // form validation: password
          if (password.length < 8) {
            setpassworderror("Password must be at least 8 characters in length");
            return;
          } else {
            setpassworderror(null);
          }

    try {
        const response = await fetch(
            'http://localhost:3000/api/users/register', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              email: email,
              password: password
            }
          })})
        ;
        const result = await response.json();
        console.log(result)
            navigate('/login');
    
        return result
      } catch (err) {
        console.error(err);
        
      }    
};

return(
    <>
    <div>
<h2>Don't have an account? Sign Up</h2>
 <form
 method="POST"
 onSubmit={registerUser} 
        onClick={() => {
            setemail(email)
        }}>
<label>
    Create Username:{""}
    <input 
        placeholder='Email Address'
        value = {email}
        
         onChange={(e)=> 
        setemail(e.target.value)} />
</label>
{emailerror && <p style={{ color: "red"}}>{emailerror}</p>} 

<label >
        Create Password:{""}
         <input 
         placeholder='Create Password'
         type='password'
         value={password}
         onChange={(e)=> 
         setpassword(e.target.value)}/>
      </label>
    
         {passworderror && <p style={{ color: "red"}}>{passworderror}</p>}

         <button  type='Submit' style=
            {{width: "80px", height: "37px", padding: "10px", 
            fontSize:"15px"}}
           
            //onClick={() => {
             //   navigate('/login');
            //}}
            >Register</button>
        
 </form>
 </div>
         </>
 );
}
Register;