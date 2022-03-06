import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IWave } from "../../interfaces/IWave";
import WaveDisplay from "../WaveDisplay/WaveDisplay";

const InputForm = () => {
  const placeholderPlan: Array<IWave> = [{ startDate: 0, endDate: 0 }];

  // handle the state of the form
  const [startDate, setStartDate] = useState(Date.now());
  const [waveDuration, setWaveDuration] = useState(1);
  const [waveCount, setWaveCount] = useState(1);
  const [wavePlan, setWavePlan] = useState(placeholderPlan);
  const [isWavePlanSet, setIsWavePlanSet] = useState(false);

  // onChange handler for inputs
  const changeWaveCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaveCount(parseInt(e.target.value));
  };

  const changeWaveDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaveDuration(parseInt(e.target.value));
  };

  const changeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(Date.parse(e.target.value));
  };

  const submitData = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createWaves(startDate, waveCount, waveDuration);
  };

  // utility functions
  const createWaves = (
    startDate: number,
    waveCount: number,
    waveDuration: number
  ) => {
    let waves = [];
    for (let i = 0; i < waveCount; i++) {
      if (i === 0) {
        const wave: IWave = {
          startDate: startDate,
          endDate: addWeeks(startDate, waveDuration).getTime(),
        };
        waves.push(wave);
      } else {
        const lastWave = waves.slice(-1)[0];
        const wave: IWave = {
          startDate: lastWave.endDate,
          endDate: addWeeks(lastWave.endDate, waveDuration).getTime(),
        };
        waves.push(wave);
      }
    }
    setWavePlan(waves);
    setIsWavePlanSet(true);
    logWaves(waves);
  };

  const addWeeks = (startDate: number, weeksAdded: number) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + weeksAdded * 7);
    return date;
  };

  const logWaves = (waves: Array<IWave>) => {
    waves.forEach((wave, i) => {
      const waveCount = i + 1;
      const startDate = new Date(wave.startDate).toDateString();
      const endDate = new Date(wave.endDate).toDateString();
      console.log(`Wave ${waveCount}: ${startDate} until ${endDate}.`);
    });
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
          <Box component='form' autoComplete='off' onSubmit={submitData}>
            <div>
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
              </div>

              <div>
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
              </div>
              <Button type='submit'>Create Planning</Button>
            </div>
          </Box>
        </CardContent>
      </Card>
      {isWavePlanSet && <WaveDisplay waves={wavePlan} />}
    </Container>
  );
};

export default InputForm;
