import {FC} from "react";
import {Box, Container} from "@mui/material";
import {useGetTeamById} from "../../api/groups/getRequest.ts";
import {useParams} from "react-router";

const GroupProfilePage: FC = () => {
    const { id = "" } = useParams();
    const {data } = useGetTeamById(id)
    console.log(data)
    return (<Container>
        <Box>dfaasdfasdf</Box>
    </Container>)
}
export default GroupProfilePage;