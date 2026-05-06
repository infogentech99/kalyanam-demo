"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-06-09").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const diff = TARGET_DATE - now;
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-[url('/assets/bg_last.webp')] bg-cover bg-no-repeat md:pb-12">
                <div className="h-80 md:h-72 lg:h-130 3xl:h-183">
                    <h2 className=" text-2xl lg:text-[52px] text-center text-[#FFF5B9] pt-14 md:pt-15 lg:pt-30 3xl:pt-42 jacques-francois leading-8">The countdown begins</h2> 
                      <h2 className="text-2xl lg:text-[52px] text-center text-[#FFF5B9] jacques-francois"> {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M</h2>
                    <p className="text-xs lg:text-[32px] text-[#FFF5B9] mt-4 3xl:mt-10 text-center px-3 md:px-55 lg:px-70 3xl:px-110 jacques-francois">
                        Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
                    </p>
                    <div className="flex flex-col-1 gap-4 justify-center items-center mt-6 3xl:mt-16">
                       <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.webp" alt="" className="w-6 h-6 lg:w-12 lg:h-12"/></a>
                       
                    </div>
                    <p className="text-base lg:text-[32px] text-[#FFF5B9] mt-6 3xl:mt-12 text-center jacques-francois">
                        © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
                </div>
            </div>
        </>
    );
} 