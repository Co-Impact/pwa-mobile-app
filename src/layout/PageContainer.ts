import { Box, styled } from "@mui/material";
import { drawerWidthClosed } from "../sidebar/SideBar";

export const PageContainer = styled(Box)(()=>({
    width: '100%',
    height: '100%',
    paddingLeft: `${drawerWidthClosed+20}px`,
    paddingRight: `20px`
}))