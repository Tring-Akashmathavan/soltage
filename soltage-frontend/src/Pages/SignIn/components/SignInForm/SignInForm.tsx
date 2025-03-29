import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignInForm.scss"
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton, Button } from "@mui/material";

function SignInForm() {

      const[showPassword , setShowPassword] = useState(false);

      const schema = yup.object().shape({
        email : yup.string().email().required("email is required"),
        password : yup.string().required("password is required").min(8).max(32),
    });

    const {register , handleSubmit , formState : {errors} , reset} = useForm({resolver : yupResolver(schema)});

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  return (
    <>
      <div className="Background-setup">

        <div className="inside-container">

        <div className="dummy-text">
        <div className="text-header">
        Welcome to the Soltage Nexus Mangement Platform
        </div>

        <div className="text-content">
        The Nexus platform provides a central point of connection and collaboration for Soltage's portfolio of projects.
        </div>
        </div>

        <div className="form">
        <form className="form-container" onSubmit = {handleSubmit(onSubmit)}>

          <div className="soltage-container"> 

              <div className="soltage-image"></div>

              <div className="welcome-container">
                        
                        <div className="welcome-header-container">
                        It’s good to have you back!
                        </div>

                        <div className="welcome-content-container">
                        Lorem Ipsum is simply dummy text of the printing and type setting industry. 
                         </div>
              </div>

          </div>

          <div className="input-fields">

            <div className="input-containers">
            <div className="label-container">
              <label htmlFor="email">Email *</label>
            </div>

            <FormControl className='material-field' >
                            <OutlinedInput 
                            sx={{height : 50}}
                            {...register("email")}
                            placeholder="Enter email"
                            type="email"
                            required/>
            </FormControl>
            
            <p>{errors.email?.message}</p>
            </div>

            <div className="input-containers">
            <div className="label-container">
              <label htmlFor="password">Password *</label>
            </div>

            <FormControl className='material-field' >
                            <OutlinedInput 
                                sx={{height : 50}}
                                {...register("password")}
                                placeholder="Enter new password"
                                type = {showPassword  ? "text" : "password"}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                            <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                    </InputAdornment>
                                    }/>
                                 
            </FormControl>

            <p>{errors.password?.message}</p>

          </div>

          </div>

          <div className="forgot-password">
          <a href="">Forgot Password</a>
          </div>
          
          <Button variant="contained" className='material-button'>Sign Up</Button>
          </form>
      
        </div>
        </div>
        </div>
    </>
  )
}

export default SignInForm