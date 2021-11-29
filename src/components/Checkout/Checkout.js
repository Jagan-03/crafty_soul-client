import * as React from 'react';
import { useSelector } from "react-redux"; 
// components
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Shipping Address', 'Place order'];


export default function Checkout() {

    const [cart, setCart] = React.useState([]);
    const cartItems = useSelector(state => state.cart);
  
    React.useEffect(() => {
      const user_id = localStorage.getItem('user_id');
      const userCart = cartItems.filter(item => item.user_id === user_id);
      setCart(userCart);
    }, [cartItems]);
    

  const [activeStep, setActiveStep] = React.useState(0);
  const [shippingData, setShippingdata] = React.useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const next = (data) => {
    setShippingdata(data);
    handleNext();
  }

  const Form = () => activeStep === 0 ? 
    <AddressForm next={next} /> : <PaymentForm shippingData={shippingData} cart={cart}/>

  return (
      <div className="container shadow-5 rounded d-flex flex-column align-items-center justify-content-center checkout-form pt-5 pb-5">
    <h4>Checkout</h4>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="">
            <Form />
          </div>
        </React.Fragment>
      )}
    </Box>
      </div>
  );
}
