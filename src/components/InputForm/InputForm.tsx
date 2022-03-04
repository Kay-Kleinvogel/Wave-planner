import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const InputForm = () => {
  // handle the state of the form
  const [startDate, setStartDate] = useState(Date.now());
  const [waveDuration, setWaveDuration] = useState(1);
  const [waveCount, setWaveCount] = useState(1);

  // onChange handler for inputs
  const changeWaveCount = (e: any) => {
    setWaveCount(e.target.value);
    console.log(waveCount);
  };

  const changeWaveDuration = (e: any) => {
    setWaveDuration(e.target.value);
    console.log(waveDuration);
  };

  const changeStartDate = (e: any) => {
    setStartDate(e.target.value);
    console.log(startDate);
  };

  return (
    <Container>
      <Card variant='outlined'>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Wave Plan calculator
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Easy form to create a new wave planning.
          </Typography>
          <Box component='form' autoComplete='off'>
            <div>
              <TextField
                required
                id='outlined-date'
                label='Start Date'
                type='date'
                placeholder={startDate.toString()}
                onChange={changeStartDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id='outlined-number'
                label='Number of Waves'
                type='number'
                placeholder={waveCount.toString()}
                onChange={changeWaveCount}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id='outlined-number'
                label='Duration of each wave (weeks)'
                type='number'
                placeholder={waveDuration.toString()}
                onChange={changeWaveDuration}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button>Create Planning</Button>
            </div>
          </Box>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            Add Waves
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default InputForm;
