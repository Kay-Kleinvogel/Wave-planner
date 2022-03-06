import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { IWave } from "../../interfaces/IWave";

interface props {
  waves: Array<IWave>;
}

const WaveDisplay = ({ waves }: props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Wave Plan</Typography>
        <Typography variant='body1'>
          {waves.map((wave: IWave, index: number) => {
            return (
              <div key={index}>
                Wave {index + 1}:{" "}
                {new Date(wave.startDate).toLocaleDateString()} until{" "}
                {new Date(wave.endDate).toLocaleDateString()}
              </div>
            );
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WaveDisplay;
