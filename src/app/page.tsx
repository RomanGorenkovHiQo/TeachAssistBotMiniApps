'use client';

import { useEffect, useState } from 'react';
import DatePicker from 'tailwind-datepicker-react';
import Script from 'next/script';

export default function Home() {
    useEffect(() => {
        Telegram.WebApp.ready();
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

            // const formattedDate = selectedDate.toISOString();

            // alert(tg.initData);
            // tg.expand();
            // tg.onEvent("sendData", () => {
            //     alert("Data sent to bot");
            // });
            tg.sendData("your_custom_data");
            // alert(JSON.stringify(window.Telegram.WebApp, undefined, 2));
            // alert(JSON.stringify(window.TelegramWebviewProxy, undefined, 2));
            // alert(window.TelegramWebviewProxy.postEvent('eventType', JSON.stringify({ key: 'value' })));
            // window.Telegram.WebApp.postEvent('customEvent', () => alert('Callback executed'), { key: 'value' });
            // postEvent('customEvent', () => console.log('Callback executed'), { key: 'value' });
            // tg.setBackgroundColor('000000')
        }
    }
        const handleClose = (state: boolean) => {
            setShow(state);
        };


        return (
            <>
                <Script
                    src="https://telegram.org/js/telegram-web-app.js?56"
                    strategy="beforeInteractive"
                ></Script>
                <div className="w-full h-screen bg-blue-100">
                    <div className="w-full">
                        <DatePicker onChange={handleChange} show={show} setShow={handleClose}/>
                    </div>
                </div>
            </>
        );
}
