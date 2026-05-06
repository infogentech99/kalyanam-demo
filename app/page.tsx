"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/components/RoseHeroTemp";
import CoupleMessage from "@/components/CoupleMessage";
import MarriageCountdown from "@/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    {
      title_ceremony: "Mehendi",
      image: "/assets/mehendi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Haldi",
      image: "/assets/haldi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    },
    {
      title_ceremony: "Sangeet",
      image: "/assets/sangeet.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Engagement",
      image: "/assets/engagement.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Muhurtham",
      image: "/assets/muhurtham.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: "/assets/reception.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/Kalyanam_wedding_song.mp3" loop preload="auto" playsInline />


      {/* hero section */}
      <div className="bg-[url('/assets/bg_respo.webp')] md:bg-[url('/assets/bg_one.webp')] bg-cover bg-no-repeat
                      bg-top md:bg-center w-full overflow-hidden relative">

        <RoseHeroTemp />
        {/* <FallingLamps /> */}
        <div className="pt-6 md:pt-34 lg:pt-54 3xl:pt-90 relative z-10">
        
          <h2 className="text-[#C47E39] text-center leading-tight text-3xl md:text-5xl lg:text-[64px]  
                           flex flex-col items-center gap-y-0 lg:gap-y-5 pb-170 md:pb-780 lg:pb-780 3xl:pb-950">

            <span className="jacques-francois">VISHNU</span>

            <span className="jacques-francois text-xl md:text-3xl lg:text-5xl tracking-widest font-cormorant">WEDS</span>

            <span className="jacques-francois">KAVYA</span>

          </h2>
                          
          <div className="flex flex-col items-center text-center gap-6 pt-20 md:pt-35 lg:pt-80 3xl:pt-100">

            <p className="jacques-francois text-base md:text-2xl lg:text-3xl text-[#FFF5B9] text-center">ॐ श्री गणेशाय नम</p>
            <img src="/assets/ganesh.webp" alt="ganesh" className="w-25 h-29 md:w-34 md:h-38 lg:w-41 lg:h-53" />


            <h2 className="text-[#FFF5B9] text-sm md:text-xl lg:text-[26px] jacques-francois ">
                With the heavenly blessings of <br /> Shri Rajesh Pillai & Shrimati Sunita Pillai
            </h2>

            <hr className="lg:w-24 w-16 border-[#FFF5B9] md:my-4" />
            <h2 className="text-[#FFF5B9] text-sm md:text-xl lg:text-[26px] jacques-francois">
                Shri Amit Gowda & Shrimati Vaishali Gowda
            </h2>

          </div>


          <div className="mt-8 text-center">
            <h2 className="text-[#FFF5B9] jacques-francois text-3xl sm:text-5xl lg:text-[64px] leading-tight lg:tracking-wide tracking-wider">
                INVITE
            </h2>

            <p className="text-[#FFF5B9] jacques-francois text-sm md:text-xl lg:text-[26px] mt-6">
                You to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#FFF097] jacques-francois text-center mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight">
                VISHNU
            </h2>

            <h2 className="text-[#FFF097] jacques-francois text-center text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="text-[#FFF097] jacques-francois text-center lg:mt-10 text-xl md:text-3xl lg:text-5xl leading-tight">&</span>  
              <br />  KAVYA
            </h2>

            <p className="text-[#FFF5B9] jacques-francois text-sm md:text-xl lg:text-[26px] mt-2 lg:mt-6 3xl:mt-12">
                Daughter of <br /> Shri Mahesh Shetty & Shrimati Asha Shetty
            </p>


            <p className="text-[#FFF5B9] jacques-francois text-sm md:text-xl lg:text-[26px] mt-8 lg:mt-16">
                On the following events
            </p>
          </div>

          <div className="flex justify-center mt-15 md:mt-25 lg:mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 3xl:gap-40 pb-40">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    className="w-75 h-auto md:w-76 lg:w-80 3xl:w-95"
                  />

                  <h2 className="text-[#FFF5B9] jacques-francois text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>



                  <p className="text-[#FFF5B9] jacques-francois text-[14px] sm:text-base mt-2">
                    <span className="text-base">{event.venue_address}</span> <br />
                  </p>

                  <a
                    href={event.link}
                    className="text-[#FFF5B9] underline md:text-sm text-[18px] mt-2 jacques-francois"
                    target="_blank">
                    See the route
                  </a>


                </div>
              ))}
            </div>
          </div>

        


          <div className="bg-[url('/assets/bg_second.webp')] bg-cover bg-no-repeat w-full h-96 md:h-181 lg:h-335 3xl:h-422
                          overflow-hidden relative">
            {/* Center Text */}
            <div className="flex flex-col justify-center items-center text-center pt-30 pl-50 md:pt-60 md:pl-110 lg:pt-115 lg:pl-210 3xl:pt-145 3xl:pl-240">
              <p className="font-cormorant text-xl md:text-2xl lg:text-[38px] text-[#C47E39] font-semibold">
                MEET THE
              </p>
              <h2 className="text-3xl md:text-6xl lg:text-[130px] text-center text-[#54A4A1] pt-2 md:pt-6 lg:pt-12 font-cormorant-upright lg:leading-18 md:leading-8 leading-4">
                <span className="font-cormorant-upright">Bride</span> <br /> 
                <span className="text-[#F7A79E]"> & </span>  <br /> 
                <span className="font-cormorant-upright ">Groom</span>
              </h2>
            </div>
          </div>
          

        </div>
      </div>




      <CoupleMessage />

      <div className=" bg-[url('/assets/bg_fourth.webp')] bg-cover bg-no-repeat ">
        <div className="h-132 md:h-251 lg:h-467 3xl:h-589 flex flex-col items-center">
          <img src="/assets/couple_logo.webp" alt="logo" width={250} height={300} className="w-25 h-23 md:w-43 md:h-42 lg:w-75 lg:h-73 mt-16 md:mt-33 lg:mt-65 3xl:mt-82" />
        </div>
      </div>


      <MarriageCountdown />
      <div className="fixed top-5 left-5 z-50">
        <a href="https://invitearc.com/">
          <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            <span className="text-3xl leading-none">←</span>
            <span className="text-[16px] font-semibold">
              Exit Preview
            </span>

          </button>
        </a>
      </div>
    </>
  );
}
