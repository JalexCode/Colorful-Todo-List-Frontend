import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import React from 'react';

export const SnackbarComponent = (props) => {
    // snackbar
    const [open, setOpen] = React.useState(true);
    const [message, setMessage] = React.useState("Ha ocurrido un error");
    
    if (props.isSuccessfulInsertedTodos === true){
      setOpen(true)
      setMessage("Se insertó la tarea correctamente")
    }else if (props.isSuccessfulUpdatedTodos === true){
      setOpen(true)
      setMessage("Se actualizó la tarea correctamente")
    }else if (props.isSuccessReadingAllTodos === true){
    }else{
      setOpen(true)
      setMessage("Ha ocurrido un error")
    }
    

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

      return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={action}
        />
      )
}
export default SnackbarComponent;