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
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Learn Chinese: Chinese Course for Beginners</div>
                        <div className='accordion-summary__duration mr-10'><span>61 lectures</span> | <span>17hr8min</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Learn Chinese - The Phonetics 1</span>
                        </div>
                        <div className="accordion-details__duration">
                            13:44
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Learn Chinese - The Phonetics 1</span>
                        </div>
                        <div className="accordion-details__duration">
                            13:44
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Learn Chinese - The Phonetics 1</span>
                        </div>
                        <div className="accordion-details__duration">
                            20 questions
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
    </div>
    );
};

export default LessonListAccordion;