import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


function Home({ users }) {

  const [open, setOpen] = useState(true);



  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
   
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Welcome {users?.email}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
 
      </DialogActions>
    </Dialog>
  </React.Fragment>
  )
}

export default Home