import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import ReactPlayer from 'react-player'

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export function DraggableDialog(prop) {
    console.log(prop)
  const [open, setOpen] = React.useState(false);
  //seturl('https://www.youtube.com/watch?v=' + prop)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const center = {
    left: '45%',
  }

  return (
    <div>
      <Button style={center} variant="contained" onClick={handleClickOpen}>
        Ver trailer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Arrastra el video donde quieras!
        </DialogTitle>
        <DialogContent>
        <ReactPlayer 
            url={'https://www.youtube.com/watch?v=' + prop.mkey}
            width='480px'
            playing= {true} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
