import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 100,
  },
  textField: {
    width: '100',
  },
  title: {
    textAlign: 'center',
  },
}))

export default function Rating() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Rating
      </Button>
      <Dialog
        className='review-box'
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Container maxWidth='lg'>
          <div elevation={3}>
            <p className='close-button'>
              {' '}
              <p onClick={handleClose} color='primary' autoFocus>
                close
              </p>
            </p>
            <div className={classes.title}>
              <h4>Why did you leave this rating?</h4>

              <h6>
                <b>Amazing, above expectations!</b>
              </h6>
            </div>
            <Container maxWidth='lg'>
              <TextField
                style={{ margin: 8, width: 490 }}
                placeholder='Tell us about your own personal experience taking this course. Was it a good match for you?'
                fullWidth
                multiline
                rows={4}
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Container>
            <div className='rating-button '>
              <Button variant='contained' color='primary'>
                Save and Continue
              </Button>
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  )
}
