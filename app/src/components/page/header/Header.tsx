import './Header.scss'
import { getGreeting } from '../../../helpers/utils';
import logo from '../../../images/martalogo.png'

import { useEffect, useState } from 'react';

const timeSummary = (today: Date, locale: string) => {
    return today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
}

// header to show user time and introduction to page
const Header = () => {
    const [today, setDate] = useState(new Date());

    const currentTimeText = 'The time is'
    const scheduleText = 'On this page you will find our current train schedules in detail.'


    // header keeps up to date ever 60 seconds on the time so the user can reference what time it is now
    // vs the train schedules they're seeing. 
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className='header-container'>
            <img className='header-image' src={logo} alt="Logo" />
            <div className='header-text-container'>
                <p className='header-text'>{`${getGreeting()} ${currentTimeText} ${timeSummary(today, 'en')}.`}</p>
                <p className='header-text'>{scheduleText}</p>

                <div className='yellow-divider' />
            </div>
        </div>
    )
}

export default Header