import type {FC} from 'react';
import {Box} from '@mui/material';
import {Navbar} from "../components/NavBar/Navbar.tsx";
import LabelBottomNavigation from "../components/ButtomNavigation/ButtonNavigation.tsx";


interface AuthLayoutProps {
    children: any;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
                <Box mt='92px' width={'100%'}>
                    {children}
                </Box>
            <LabelBottomNavigation/>
        </Box>
    );
};

export default AuthLayout;
