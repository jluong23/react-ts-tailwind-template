import { useState } from "react";

function RegistrationForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
    }

    return (
      <form className="flex flex-col items-start space-y-1" onSubmit={formSubmit}>
        <h2>Register</h2>
          <label htmlFor="email">Email: </label>
          <input name="email" onChange={(e) => {setEmail(e.target.value)}} required/>
          <label htmlFor="password">Password: </label>
          <input type={"password"} name="password" onChange={(e) => {setPassword(e.target.value)}} required/>
          <input className="pill-button bg-red-400" type="submit" required/>
      </form>
    );
  }
  
  export default RegistrationForm;
  