import React from "react";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

import FormInput from "./CustomeTextField";


const AddressForm = ({next}) => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
           email: "",
           address1: "",
           city : "",
           zip : ""  
        }
      });

      const onSubmit = (data) => {
        
        next(data);
      }

    return (
        <div className="pt-5">
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <Grid container spacing={5}>
                         <FormInput required name="firstName" label="First Name" control={control}/>
                         <FormInput required name="lastName" label="Last Name" control={control}/>
                         <FormInput required name="email" label="Email" control={control}/>
                         <FormInput required name="address1" label="Address" control={control}/>
                         <FormInput required name="city" label="City" control={control}/>
                         <FormInput required name="zip" label="ZIP / Postal Code" control={control}/>
                    </Grid>
                    <div className="d-flex w-100 p-4 justify-content-end">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </form>
        </div>
    )
}

export default AddressForm;