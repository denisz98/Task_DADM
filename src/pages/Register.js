import { useState } from "react";
import Input from "./components/forms/Input";
import toast,{ Toaster } from "react-hot-toast";
import axios from "axios";



export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      if(password!==confirmPassword){
        toast.error("Password do not match")
      }
      await axios.post(' ')
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 "
      style={{ marginTop: ""  }}
    >
      <Toaster/>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="fw-bold md-3"> Register</h1>
            <form onSubmit>
              <Input value= {name} setValue= {setName} label="Name" type="text" />
              <Input value= {email} setValue= {setEmail} label="Email" type="email" />
              <Input value= {password} setValue= {setPassword} label="Password" type="password"/>
              <Input value= {confirmPassword} setValue= {setConfirmPassword} label="Confirm password" type="password"/>
              
              <button onClick={handleSubmit} type="submit" className="btn btn-primary" disabled={!name || !email||email<6||password.length<8}>
                Aceptar
              </button>
            </form>
          </div>

          <pre>{JSON.stringify({name,email, password, confirmPassword},null,4)}</pre>
        </div>
      </div>
    </div>
  );
}
