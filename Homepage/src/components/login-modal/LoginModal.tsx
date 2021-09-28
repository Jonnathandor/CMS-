import React, { useState }from 'react';
import './LoginModal.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Button, Input } from '@material-ui/core';
import { ILoginModalProps } from '../../interfaces'

function getModalStyle(){
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }))

export const LoginModal: React.FC<ILoginModalProps> = ({openSignIn, signIn, closeModal}) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login-modal">
            <Modal
                open={openSignIn}
                onClose={() => closeModal(true)}>
                <div style={modalStyle} className={classes.paper}>
                <form className="app__signup">
                    <img className="app__headerImage"
                    src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_960_720.png"
                    alt="" />
                    <Input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}/>
                    <Input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit" onClick={(e) => signIn(e, false, email, password)}>Sign In</Button>
                </form>
                </div>
            </Modal>
        </div>
    )
}

