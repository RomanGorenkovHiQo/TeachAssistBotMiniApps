'use client';

import { useEffect, useState } from 'react';
import DatePicker from 'tailwind-datepicker-react';
import Script from 'next/script';

export default function Home() {
    useEffect(() => {
        if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
            console.log('Telegram Web App initialized:', Telegram.WebApp);
        } else {
            console.error('Telegram Web App is not available.');
        }
    }, []);
    const [show, setShow] = useState<boolean>(false);
    const handleChange = (selectedDate: Date) => {
        console.log(selectedDate);

        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;

            const formattedDate = selectedDate.toISOString();

            tg.sendData(formattedDate);
        }
    }
        const handleClose = (state: boolean) => {
            setShow(state);
        };


        return (
            <>
                <Script
                    src="https://telegram.org/js/telegram-web-app.js?56"
                    strategy="afterInteractive"
                ></Script>
                <div className="w-full h-screen bg-black">
                    <div className="w-full">
                        <DatePicker onChange={handleChange} show={show} setShow={handleClose}/>
                    </div>
                </div>
            </>
        );
}
