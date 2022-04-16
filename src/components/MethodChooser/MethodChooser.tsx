import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const MethodChooser = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h1'>Agile Project Scheduler</Typography>
      <Typography variant='body1'>
        Tired of the endless creation of project schedules and key-dates? Use
        this tool to easily generate the schedule for your projects.
      </Typography>
      <hr />
      <Typography variant='h4'>The right project methodology</Typography>
      <Typography variant='body1'>
        The first step to your perfect plan is to select which methodology you
        want to use. For this you can choose between:
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>
            A wave-based approach where mutliple waves with similar tasks are
            run. These waves can either follow a classical waterfall approach,
            or intertwine and run in parallel.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>
            A sprint-based approach, following agile principles. Here the
            project is split into 2-week sprints that are then used to finish
            functionality in order to progress the final product.
          </Typography>
        </li>
      </ul>
      <Typography>
        Currently these are the only available methodologies. Further methods
        will be added later.
      </Typography>
      <Typography variant='subtitle1'>
        Which project type do you plan?
      </Typography>
      <Stack spacing={2} direction='row'>
        <Button variant='contained'>Wave-based Project</Button>
        <Button variant='contained'>Sprint-based Project</Button>
      </Stack>
    </Container>
  );
};

export default MethodChooser;
