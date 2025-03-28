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
        <form onSubmit = {handleSubmit(onSubmit)} className="form-container">
            <div className="soltage-form-container">
                
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

                {/* input fields */}

                <div className="input-fields">

                  <div className="name-fields">
                        <label htmlFor="firstname" className="name-container">
                            First Name *
                        </label>
            
                        {/* <input
                            {...register("firstname")}
                            placeholder=""
                            type="firstname"
                            required /> */}

                            <FormControl className='material-field' >
                            <OutlinedInput 
                            placeholder="Enter first name" 
                            {...register("firstname")}
                            type="firstname"
                            required/>
                            </FormControl>

                        <p>{errors.firstname?.message}</p>

                        <label htmlFor="lastname" className="name-container">
                            Last Name *
                        </label>
                        {/* <input
                            {...register("lastname")}
                            placeholder="Enter last name"
                            type="lastname"
                            required /> */}
                        
                        <FormControl className='material-field' >
                            <OutlinedInput 
                            {...register("lastname")}
                            placeholder="Enter last name"
                            type="lastname"
                            required/>
                            </FormControl>

                        <p>{errors.lastname?.message}</p>
                    </div>
                            
                        <div className="field-containers">
                        <label htmlFor="email" className="input-field-container">
                            Email *
                        </label>

                        {/* <input
                            {...register("email")}
                            placeholder=""
                            type="email"
                            required /> */}

                        <FormControl className='material-field' >
                            <OutlinedInput 
                            {...register("email")}
                            placeholder="Enter email"
                            type="email"
                            required/>
                            </FormControl>
                        <p>{errors.email?.message}</p>
                    
                        <label htmlFor="password" className="input-field-container">
                            Password *
                        </label>
                        {/* <input
                            {...register("password")}
                            placeholder="Enter new password"
                            type="password"
                            required /> */}

                        <FormControl className='material-field' >
                            <OutlinedInput 
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

                        <label htmlFor="confirmpassword" className="input-field-container">
                            Confirm Password *
                        </label>

                        {/* <input
                            {...register("confirmpassword")}
                            placeholder="Re-type new password"
                            type="password"
                            required /> */}

                        <FormControl className='material-field' >
                            <OutlinedInput 
                                {...register("confirmpassword")}
                                placeholder="Re-type new password"
                                type="password"
                                required/>
                            </FormControl>

                        <p>{errors.confirmpassword?.message}</p>

                        <label htmlFor="department" className="input-field-container">
                            Department *
                        </label>

                        {/* <input
                            {...register("department")}
                            placeholder="Executive"
                            type="department"
                            required /> */}

                        <FormControl className='material-field' >
                            <OutlinedInput 
                                {...register("department")}
                                placeholder="Executive"
                                type="department"
                                required/>
                            </FormControl>

                        <p>{errors.department?.message}</p>
                </div>
                </div>  

                {/* Button component use  */}
                <div className="button-container">
                    <Buttons/>
                </div>

            </div>
        </form>
    </>
  )
}
