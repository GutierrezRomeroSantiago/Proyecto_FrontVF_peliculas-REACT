
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Cookies from 'universal-cookie'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import {ChatPage} from '../pages/chatPage2';
import { Tecno } from '../components/Tech';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AppBar from '@mui/material/AppBar';
import Toolbarx from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ChatIcon from '@mui/icons-material/Chat';
import BoltIcon from '@mui/icons-material/Bolt';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// INICIO VENTANA DESPLEGABLE 1 y 2

//Desplegable para chat
function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ ml: 2 }} variant="outlined" onClick={handleClickOpen}>
        <ChatIcon/>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbarx>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              MoviesChat
            </Typography>
          </Toolbarx>
        </AppBar>
        <ChatPage/>
      </Dialog>
    </div>
  );
}

//Desplegable para tecnologias
export function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ ml: 2 }} color="success" variant="outlined" onClick={handleClickOpen}>
      <BoltIcon />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Tecnologías utilizadas para este proyecto"}</DialogTitle>
        <DialogContent>
          <Tecno/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// FIN VENTANA DESPLEGABLE



export function Toolbar () {

  const cookies = new Cookies();

  const a = function handleLogout () {
     cookies.remove('estado');
     cookies.remove('usuario');
     cookies.remove('nombre');
     window.location.href="/";
    //alert("Logout");
  }


    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Movie Media</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/estrenos">Estrenos</Nav.Link>
        <NavDropdown title="Tendencias" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/diario">Diarias</NavDropdown.Item>
          <NavDropdown.Item href="/semanal">Semanales</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>{cookies.get('nombre')}</Nav.Link>
        <Nav.Link>
          <Stack direction="row" spacing={2}>
            <Avatar
            sx={{ bgcolor: deepOrange[500], width: 27, height: 27 }}
            alt={cookies.get('usuario')}
            src='../default-placeholder.png'
            />
          </Stack>
        </Nav.Link>
      </Nav>
      
        <FullScreenDialog/>
        <AlertDialogSlide />
        <Button
         sx={{ ml: 2 }}
         variant="outlined" color="error" onClick={a}>
        <PowerSettingsNewIcon/>
        </Button>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}


