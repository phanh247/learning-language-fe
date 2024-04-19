import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const LessonListAccordion = () => {
    return (
        <div className='lesson-list-accordion'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div className='accordion-summary__container w-full text-left'>
                        <p className='font-bold'>Module 1: Who Are You?</p>
                        <p className='text-sm text-gray-500'>6 lectures | 17hr8min</p>
                    </div>
                </AccordionSummary>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> Welcome to "Chinese for beginners"</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> What is your name?</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div className='accordion-summary__container w-full text-left'>
                        <p className='font-bold'>Module 1: Who Are You?</p>
                        <p className='text-sm text-gray-500'>6 lectures | 17hr8min</p>
                    </div>
                </AccordionSummary>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> Welcome to "Chinese for beginners"</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> What is your name?</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div className='accordion-summary__container w-full text-left'>
                        <p className='font-bold'>Module 1: Who Are You?</p>
                        <p className='text-sm text-gray-500'>6 lectures | 17hr8min</p>
                    </div>
                </AccordionSummary>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> Welcome to "Chinese for beginners"</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> What is your name?</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div className='accordion-summary__container w-full text-left'>
                        <p className='font-bold'>Module 1: Who Are You?</p>
                        <p className='text-sm text-gray-500'>6 lectures | 17hr8min</p>
                    </div>
                </AccordionSummary>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> Welcome to "Chinese for beginners"</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> What is your name?</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div className='accordion-summary__container w-full text-left'>
                        <p className='font-bold'>Module 1: Who Are You?</p>
                        <p className='text-sm text-gray-500'>6 lectures | 17hr8min</p>
                    </div>
                </AccordionSummary>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> Welcome to "Chinese for beginners"</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
                
                <AccordionDetails>
                    <div className="accordion-details__lesson text-left">
                        <p className='lesson-name'><i class="fa-solid fa-video mr-2"></i> What is your name?</p>
                        <p className='lesson-duration text-sm text-gray-500 ml-8'>3 mins</p>
                    </div>
                </AccordionDetails>
            </Accordion>
    </div>
    );
};

export default LessonListAccordion;