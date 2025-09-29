import {FC} from "react";
import {Avatar, Box, Card, Chip, Container, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {group} from "../../data/group.ts";
import {useGetAllTeams} from "../../api/groups/getRequest.ts";

const Group: FC = () => {
    const {data, isLoading} = useGetAllTeams()
    console.log(data)
  return (
    <Container>
      {group.map(({ name, members }, index) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 1,
            margin: "5px 0",
          }}
          key={index}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant={"body2"}>{name}</Typography>
            <Chip
              size={"small"}
              icon={<AccountCircleIcon />}
              label={members.length}
            />
          </Box>
          <Divider />
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {members.map(({ imageUrl }, index) => (
              <Avatar src={imageUrl} key={index} />
            ))}
          </Box>
        </Card>
      ))}
    </Container>
  );
};

export default Group;
