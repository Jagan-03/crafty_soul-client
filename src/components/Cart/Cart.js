import React from "react";
import { Modal, Backdrop, Fade, Box } from "@mui/material";

const Cart = ({cartItems, open, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "30%",
        minWidth : "300px",
        height : "600px",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const addItem = (item) => {

      }

      const reduceItem = (item) => {

      }

    return (
        <div>

          {/* Cart modal     */}
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}

            <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel">
          Your Shopping Cart
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        {cartItems.map(item => {
        return <div className="d-flex m-2 border-bottom pb-2">
            <div className="d-flex">
                <img className="img img-thumbnail" src={item.image} alt="item" />
            </div>
            <div className="flex-fill d-flex align-items-between">
                <ul className="list-unstyled ps-5">
                    <li className="fw-bold text-black">{item.name}</li>
                    <li><p className="m-0 cart-item-desc">{item.description}</p></li>
                    <div class="quantity d-flex">
                        <button onClick={() => reduceItem(item)} class="btn btn-sm btn-danger" type="button" name="button">
                            -
                        </button>
                        <input className="w-25 text-center form-control border-light" type="text" name="name" value={item.quantity} />
                        <button onClick={() => addItem(item)} class="btn btn-sm btn-success" type="button" name="button">
                            +
                        </button>
                    </div>
                    <li className="text-black mt-2">Rs. {item.price}</li>
                </ul>
            </div>
        </div>
        })}

      </div>
        <div class="d-flex justify-content-end mx-2 mx-3">
          <h5>Total: <span class="price text-success">89$</span></h5>
        </div>
      <div class="modal-footer border-top-0 d-flex justify-content-between">
        <button type="button" class="btn btn-secondary model-btn btn-sm" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success model-btn btn-sm">Checkout</button>
      </div>
    </div>

          </Box>
        </Fade>
      </Modal>
        </div>
    )
}

export default Cart;