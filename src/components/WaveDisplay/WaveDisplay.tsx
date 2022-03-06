import {
  Card,
  CardContent,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IWave } from "../../interfaces/IWave";

interface props {
  waves: Array<IWave>;
}

const WaveDisplay = ({ waves }: props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Wave Plan</Typography>
        <TableContainer>
          <TableHead>
            <TableCell>Wave Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableHead>
          <TableBody>
            {waves.map((wave, i) => {
              const waveCount = i + 1;
              const startDate = new Date(wave.startDate).toLocaleDateString();
              const endDate = new Date(wave.endDate).toLocaleDateString();
              return (
                <TableRow key={waveCount}>
                  <TableCell>{wave.waveName}</TableCell>
                  <TableCell>{startDate}</TableCell>
                  <TableCell>{endDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default WaveDisplay;
