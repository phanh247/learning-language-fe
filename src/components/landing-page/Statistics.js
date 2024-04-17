import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistics = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className='statistics px-[7%] py-[5%] relative'>
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className="statistics__container bg-[#667abe] rounded-xl flex justify-between items-center px-10 py-5">
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        course available
                    </div>
                </div>
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                    {counterOn && <CountUp start={0} end={10} duration={2.5} delay={0} />}+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        language available
                    </div>
                </div>
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                    {counterOn && <CountUp start={0} end={100000} duration={2} delay={0} />}+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        students worldwide
                    </div>
                </div>
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                    {counterOn && <CountUp start={0} end={100} duration={1.5} delay={0} />}+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        verified teachers
                    </div>
                </div>
            </div>
            </ScrollTrigger>
        </div>
    );
};

export default Statistics;