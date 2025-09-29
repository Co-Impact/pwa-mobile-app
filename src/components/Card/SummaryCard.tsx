import {FC} from "react";
import {Box, Card, Typography} from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
}
export const SummaryCard: FC<Props> = ({ title, subtitle }) => {
  return (
    <Card sx={{gap:2, padding:2, margin:"10px 0px"}}>
      <Typography variant={"h5"}>{title}</Typography>
      <Box>
        <Typography >{subtitle}</Typography>
      </Box>
    </Card>
  );
};
