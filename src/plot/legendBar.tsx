import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import {
  PlotAxes, usePlotStore
} from "./plotStore";

export default function LegendBar(): JSX.Element {
  const plotConfig = usePlotStore();

  return (
    <Card sx={{ height: 1, width: 1 }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6"> Legend</Typography>
          <Typography>Add something to do with colors here</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={plotConfig.detector.inPlot} />} label="Detector" />
            <FormControlLabel control={<Checkbox checked={plotConfig.beamstop.inPlot} />} label="Beamstop" />
            <FormControlLabel control={<Checkbox checked={plotConfig.cameraTube.inPlot} />} label="Camera tube" />
            <FormControlLabel control={<Checkbox checked={plotConfig.qrange} />} label="Q range" />
            <FormControlLabel control={<Checkbox checked={plotConfig.mask} />} label="Mask" />
            <FormControlLabel control={<Checkbox checked={plotConfig.calibrantInPlot} />} label="Calibrant" />
          </FormGroup>
          <Divider />
          <Typography>Current calibrant: {5}</Typography>
          <Divider />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Axes:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={plotConfig.plotAxes}
              name="radio-buttons-group"
              onChange={(event) => plotConfig.edit({ plotAxes: event.target.value as PlotAxes })}
            >
              <FormControlLabel value={PlotAxes.milimeter} control={<Radio />} label="Axes in mm" />
              <FormControlLabel value={PlotAxes.pixel} control={<Radio />} label="Axes in pixels" />
              <FormControlLabel value={PlotAxes.reciprocal} control={<Radio />} label="Axes in q(nm^-1)" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </CardContent>
    </Card >
  );
}
