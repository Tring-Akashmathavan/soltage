import Buttons from "../../../Components/Buttons/Buttons"
import "./SignUpForm.scss"
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";

export default function SignUpForm() {

    const schema = yup.object().shape({
        firstname : yup.string().required("first name is required").matches( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Invalid Name format"
         ),
        lastname : yup.string().required("last name is required").matches( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Invalid Name format"
         ),
        email : yup.string().email().required("email is required"),
        password : yup.string().required("password is required").min(8).max(32),
        confirmpassword : yup.string().required("confirm password is required"),
        department : yup.string().required()
    });


    const {register , handleSubmit , formState : {errors} , reset} = useForm({resolver : yupResolver(schema)});

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    }

  return (
    <>
        <div className="container">

            <div className="form-container">

                    {/* Soltage image setup */}
                    <div className="soltage-image"></div>

                    {/* welcome signup */}
                    <div className="welcome-container">
                        
                        <div className="welcome-header-container">
                        Welcome, Sign Up
                        </div>

                        <div className="welcome-content-container">
                        Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                    </div>

            </div>

            <form action=""  onSubmit = {handleSubmit(onSubmit)} className="form">

                    {/* input fields */}

                <div className="input-fields">

                <div className="names-container">
                <div className="name-fields">

                        <div className="first-name-container">
                        <div className="name-container">
                            <label htmlFor="firstname" >First Name *</label>
                        </div>
                        
                            <FormControl className='material-field' sx={{width : 239 , paddingRight : "16px"}}>
                            <OutlinedInput 
                            sx={{height : 50}}
                            placeholder="Enter first name" 
                            {...register("firstname")}
                            type="firstname"
                            required/>
                            </FormControl>

                        <p>{errors.firstname?.message}</p>
                        </div>
                        
                        <div className="first-name-container">
                        <div className="name-container"><label htmlFor="lastname" >Last Name *</label></div>
                        
                        <FormControl className='material-field' sx={{width : 239}}>
                            <OutlinedInput 
                            sx={{height : 50 }}
                            {...register("lastname")}
                            placeholder="Enter last name"
                            type="lastname"
                            required/>
                            </FormControl>

                        <p>{errors.lastname?.message}</p>
                        </div>
                    </div>
                    </div>
                        <div className="field-containers">

                            <div className="input-field-container">
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
                    
                        <div className="input-field-container">
                            <label htmlFor="password">Password *</label></div>
                        
                        
                        <FormControl className='material-field' >
                            <OutlinedInput 
                                sx={{height : 50}}
                                {...register("password")}
                                placeholder="Enter new password"
                                type="password"
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton

                                        />
                                    </InputAdornment>
                                    }/>
                                 
                            </FormControl>

                        <p>{errors.password?.message}</p>

                        <div className="input-field-container">
                            <label htmlFor="confirmpassword">Confirm Password *</label></div>

                        <FormControl className='material-field' >
                            <OutlinedInput 
                                 sx={{height : 50}}
                                {...register("confirmpassword")}
                                placeholder="Re-type new password"
                                type="password"
                                required/>
                            </FormControl>

                        <p>{errors.confirmpassword?.message}</p>
                        
                        <div className="input-field-container">
                            <label htmlFor="department">Department *</label>
                            </div>
                        

                        <FormControl className='material-field' >
                            <OutlinedInput 
                            sx={{height : 50}}
                                {...register("department")}
                                placeholder="Executive"
                                type="department"
                                required/>
                            </FormControl>

                        <p>{errors.department?.message}</p>
                </div>
                </div>  
            </form>
            {/* Button component use  */}
            <div className="button-container">
                    <Buttons/>
                </div>
        </div>
    </>
  )
}
