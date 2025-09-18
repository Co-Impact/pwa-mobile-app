import * as React from "react";
import {FC, ReactElement} from "react";
import {Button, Card, CardActions, CardContent, CircularProgress, SvgIcon, Typography} from "@mui/joy";


interface Props {
  title: string;
  value: number;
  icon?: ReactElement;
}
export const GlobalCardChart: FC<Props> = ({ title, value, icon }) => {
  return (
    <Card variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={20}>
          <SvgIcon>{icon}</SvgIcon>
        </CircularProgress>
        <CardContent>
          <Typography level="h3">{title}</Typography>
          <Typography level="body-md">{value}</Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button variant="soft" size="sm">
          Add to Watchlist
        </Button>
        <Button variant="solid" size="sm">
          See breakdown
        </Button>
      </CardActions>
    </Card>
  );
};
