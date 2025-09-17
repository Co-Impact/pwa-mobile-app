import {FC} from "react";
import {Avatar, Box, Card, Typography} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import {Link} from "react-router";

interface Props {
  id: string;
  logo: string;
  positionName: string;
  companyName: string;
}
export const JobCard: FC<Props> = ({ id, logo, positionName, companyName }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "10px 0",
        padding: 1,
        gap: 1,
      }}
      component={Link}
      to={`/jobs/${id}`}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Avatar src={logo} />
        <Box>
          <Typography>{positionName}</Typography>
          <Typography component={Link} to={`/company/${id}`}>
            {companyName}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        component={Link}
        to={id}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MoreHorizIcon />
      </Box>
    </Card>
  );
};
