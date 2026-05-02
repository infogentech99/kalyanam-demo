
export default function CoupleMessage() {

    return (

        <div className="bg-[#9e1902] bg-[url('/assets/bg_three_respo.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
            <div className="h-546 md:h-489 lg:h-982 3xl:h-1144">
                <h1 className="text-base md:text-2xl lg:text-[36px] text-center text-[#FFF5B9] pt-12 lg:pt-40 jacques-francois">A message from the couple</h1>
                <h2 className="text-xs md:text-xl lg:text-[32px] text-center text-[#FFF5B9] px-6 md:px-17 lg:px-53 3xl:px-103 mt-12 lg:mt-36 jacques-francois leading-4 md:leading-8 lg:leading-8 3xl:leading-10">
                    We are both so delighted that you are able to join us in celebrating what
                    we hope will be one of the happiest days of our lives. The affection shown
                    to us by so many people since our roka has been incredibly moving, and has
                    touched us both deeply. We would like to take this opportunity to thank
                    everyone most sincerely for their kindness.We are looking forward to see
                    you at the wedding. 
                </h2>

                 <div className="relative flex flex-col items-center mt-14 md:mt-12 lg:mt-20 3xl:mt-50">
                    <img src="/assets/flowers.webp" alt="flowers" className="absolute right-[-2] w-22 h-18 md:right-[-4] md:w-38 md:h-34 
                               lg:right-[-8] lg:w-56 lg:h-52 3xl:w-64 3xl:h-60 z-10" />
                    <img src="/assets/couple_one.webp" alt="couple_one" className=" absolute top-8 left-14 w-45 h-60 md:left-47 
                               md:top-15 md:w-80 md:h-90 lg:left-84 lg:top-25 lg:w-143 lg:h-186 3xl:left-135 3xl:top-30 3xl:w-160 3xl:h-200 z-10" />
                    <img src="/assets/couple_two.webp" alt="couple_two" className="absolute top-15 right-14 w-25 h-25 md:top-19 
                               md:right-41 md:w-40 md:h-40 lg:top-38 lg:right-92 lg:w-65 lg:h-71 3xl:top-42 3xl:right-120 3xl:w-70 3xl:h-76 z-20" />
                    <img src="/assets/couple_three.webp" alt="couple_three" className="absolute top-30 right-20 w-28 h-32 md:top-48 
                               md:right-54 md:w-40 md:h-47 lg:top-93 lg:right-103 lg:w-78 lg:h-92 3xl:top-102 3xl:right-133 3xl:w-83 3xl:h-97 z-10" />
                    <img src="/assets/couple_four.webp" alt="couple_four" className="absolute mt-2 top-54 right-24 w-38 h-25 md:top-85 md:right-60  
                               md:w-60 md:h-40 lg:w-116 lg:h-79 lg:top-170 lg:right-112 3xl:w-126 3xl:h-84 3xl:top-186 3xl:right-142 z-20" />
                    <img src="/assets/bouquet.webp" alt="flowers" className="absolute left-1 top-70 w-24 h-30 md:left-23 md:top-107 md:w-40 
                               md:h-46 lg:left-45 lg:top-220 lg:w-64 lg:h-93 3xl:left-80 3xl:top-240 3xl:w-89 3xl:h-98 z-40" />
                 </div>


                <h1 className="text-center text-5xl md:text-6xl lg:text-[122px] lg:leading-35 text-[#FFF5B9] pt-110 md:pt-160 lg:pt-350 3xl:pt-380 jacques-francois">
                    Things to <br /> know
                </h1>
                <h2 className="text-xs md:text-xl lg:text-[32px] text-center text-[#FFF5B9] pt-6 md:pt-6 lg:pt-10 3xl:pt-10 px-8 md:px-20 lg:px-58 3xl:px-108 mt-6 lg:mt-4 3xl:mt-10 jacques-francois">
                    To help you feel at ease and enjoy every moment of the celebrations,
                    we’ve gathered a few thoughtful details we’d love for you to know
                    before the big day.
                </h2>
                <div className="flex justify-center mt-20 3xl:mt-30 pb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-44 gap-10 md:gap-14">
                        <div className="flex flex-col items-center justify-center text-center">
                            <img
                                src="/assets/weather.webp"
                                alt="weather"
                                className="h-26 w-32 md:w-25 md:h-20 lg:w-30 lg:h-25"
                            />
                            <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#FFF5B9] mt-2 jacques-francois">
                                Weather
                            </h2>
                            <p className=" text-sm lg:text-[15px] text-[#FFF5B9] mt-1 jacques-francois md:leading-5">
                                It will be mostly cloudy with <br />
                                temperature reaching up <br />
                                to 22 degrees at the venue
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <img
                                src="/assets/staff.webp"
                                alt="drive"
                                className="h-34 w-29 md:w-13 md:h-20 lg:w-18 lg:h-25"
                            />
                            <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#FFF5B9] mt-2 jacques-francois">
                                Staff
                            </h2>
                            <p className="text-sm lg:text-[15px] md:leading-5 text-[#FFF5B9] mt-1 jacques-francois">
                                We recommend the nearby <br />
                                lodge called VEGA near the <br />
                                venue for the staff members
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <img
                                src="/assets/parking.webp"
                                alt="car"
                                className="w-32 h-26 md:w-25 md:h-20 lg:w-30 lg:h-25"
                            />
                            <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#FFF5B9] mt-2 jacques-francois">
                                Parking
                            </h2>
                            <p className="text-sm lg:text-[15px] md:leading-5 text-[#FFF5B9] mt-1 jacques-francois">
                                Valet parking for all our <br />
                                guests will be available <br />
                                at the venue
                            </p>
                        </div>
                    </div>
                </div>



                <div className="flex items-center mt-4 md:mt-0 lg:mt-60 3xl:mt-90 gap-5 md:gap-30 3xl:gap-70">
                    <img
                        src="/assets/couple_last.webp"
                        alt="couple"
                        className="w-60 h-50 md:w-100 md:h-80 lg:w-200 lg:h-165 3xl:w-240 3xl:h-200 object-cover pl-4 md:pl-10 lg:pl-17"
                    />
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-cormorant-upright font-semibold text-center text-sm md:text-3xl lg:text-[64px] text-[#FFF5B9] md:leading-8 lg:leading-20 leading-3">
                            Looking forward to <br /> seeing you
                        </h2>
                        <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center md:not-first:mt-4">
                            <a href="#" target="_blank">
                                <img src="./assets/whatsapp.webp" alt="whatsapp" className="h-6 w-6 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px]" />
                            </a>
                            <h2 className="font-cormorant-upright font-semibold text-[8px] md:text-base lg:text-[22px] text-[#FFF5B9] jacques-francois-upright pr-0 md:pr-0 lg:pr-4">
                                Click the Link to RSVP
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}