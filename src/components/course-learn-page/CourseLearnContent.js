import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import YouTube from 'react-youtube';

const CourseLearnContent = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className='course-learn-content w-3/4'>
            <div className="course-learn-content__header bg-gray-900 h-[55%] relative">
                <YouTube videoId='szKhFJ61Vqg' controls className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className="course-learn-content__body">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="About" value="1" />
                            <Tab label="Q&A" value="2" />
                            <Tab label="Note" value="3" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">Item </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
};

export default CourseLearnContent;