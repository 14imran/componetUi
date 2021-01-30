import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  images: {
    borderRadius: 50,
  },
}))

const data = [
  {
    name: 'Jhon',
    message: 'I just started so far so good',
    rating: '5',
    image:
      'https://img-a.udemycdn.com/user/50x50/2086268_d9e8.jpg?JFXP9PS6wJ3HLIesTRVptPriNWH-_mzLxpzSSPOK7V_GxK7M6rkqy0MH8uQiIjHcJkEIeakW0NEp2XRyJU-C6xF0FO6orUwC1kDc8bQ7JOIELm2bOvZn3hp1',
  },
  {
    name: 'Jhon doe',
    message: 'Good course',
    rating: '4',
    image:
      'https://img-a.udemycdn.com/user/50x50/2086268_d9e8.jpg?JFXP9PS6wJ3HLIesTRVptPriNWH-_mzLxpzSSPOK7V_GxK7M6rkqy0MH8uQiIjHcJkEIeakW0NEp2XRyJU-C6xF0FO6orUwC1kDc8bQ7JOIELm2bOvZn3hp1',
  },
]

export default function AutoGridNoWrap() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid container wrap='nowrap' spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Ben cruz</Typography>
            <ListItemText secondary='Jan 9, 2014' />
            <Typography>I just started so far so good</Typography>
          </Grid>
        </Grid>
      </div>
      {data.map((data) => (
        <div className={classes.paper}>
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item>
              <img className={classes.images} src={data.image} />
            </Grid>
            <Grid item xs>
              <Typography>{data.name}</Typography>
              <ListItemText secondary='Jan 9, 2014' />
              <Typography>{data.message}</Typography>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  )
}
