import { toast } from "react-toastify";

let toastId = ""


// Toaster messages for error
export const showErrorToast = (errorMessage) => {
    if(errorMessage){
      if (!toast.isActive(toastId)) {
        toastId = toast.error(errorMessage, {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 4000,
        });
      }
    }
  };
  
  // Toaster messages for success
  export const showSuccessToast = (message) => { 
    if (!toast.isActive(toastId)) {    
      toastId = toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 4000,  
      });
    }
  
  };