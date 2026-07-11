import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Box, Stack } from '@mui/material';
import UserActivity from '../UserActivity';
import VideoAccess from '../VideoAccess';
import SiteErrors from '../SiteErrors';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={3} sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    variant="fullWidth"
                    sx={{
                        '& .MuiTab-root': {
                            color: '#0f1232',
                            fontWeight: '400'
                        },
                        '& .MuiTab-root.Mui-selected': {
                            color: '#3b66ac',
                            fontWeight: '600',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#3b66ac'
                        }
                    }}
                >
                    <Tab label="User Activity" {...a11yProps(0)} />
                    <Tab label="Video Access" {...a11yProps(1)} />
                    <Tab label="Site Errors" {...a11yProps(2)} />
                </Tabs>
            </Box>
            
            <CustomTabPanel value={value} index={0}>
                <UserActivity />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <VideoAccess/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SiteErrors/>
            </CustomTabPanel>
        </Stack>
    );
}
