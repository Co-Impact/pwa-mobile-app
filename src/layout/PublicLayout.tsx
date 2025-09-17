import type { FC } from 'react';
import { Box } from '@mui/material';

interface PublicLayoutProps {
    children: any;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {children}
        </Box>
    );
};

export default PublicLayout;
