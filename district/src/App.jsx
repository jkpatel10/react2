import react, { useState } from 'react'
import Nav from './Components/Nav'
import Carda from './Components/Carda'
import Cardb from './Components/Cardb'
import Circle from './Components/Circle'
import Footer from './Components/Footer'

const arr = [
  {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1745413613/mrtoktics3lxyhk7oh9p.jpg",
      offer: "20% off up to ₹150",
      date: "Daily, Multiple slots",
      title: "Glued Supercharged",
      venue: "Glued Supercharged, Noida",
      price: "₹99 onwards"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1749714589/ot0sk39deczmfkmrtcgq.jpg",
      offer: "25% off up to ₹300",
      date: "Daily, Multiple slots",
      title: "Zoreko - ELAN Town Center | Gurugram",
      venue: "Zoreko - Original Gamers, Gurugram",
      price: "₹349 onwards"
    },
     {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1756290251/uqnowhzlyylq8d1yer6o.png",
      offer: "20% off up to ₹150",
      date: "Sun, 21 Sept - Tue, 30 Sept, Multiple slots",
      title: "THE GAMERS GATE - Ultimate Hub For Snooker, Pool and Console...",
      venue: "The Gamers Gate, Gurugram",
      price: "₹150 onwards"
    },
     {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1752474916/mogxbpgcrwbs4ms7ik4h.png",
      offer: "20% off up to ₹150",
      date: "Daily, Multiple slots",
      title: "iLAN eSports Club",
      venue: "iLAN e-Sports Club, Noida",
      price: "₹100"
    }
];

const music = [
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757608305/yc9wzt6439dnhf68f4di.jpg",
      date: "Fri, 26 Sep - Sun, 28 Sep, 7:30 PM",
      title: "Dandia Night | Float by Duty Free",
      venue: "Float by Duty Free, Noida",
      price: "₹249 onwards"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757302023/sykymhhzd1cf2yqba2eh.jpg",
      offer: "Pay only 50% to reserve your tickets",
      date: "22 Nov - 23 Nov, 3PM",
      title: "Rolling Loud India | Hip-Hop Festival | Karan Aujla, Central Cee",
      venue: "Loud Park, Kharghar, Mumbai",
      price: "₹7000 onwards"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1758201425/xj9fsl2n7cgbm8nreg78.jpg",
      date: "Sat, 11 Oct, 12:00 PM",
      title: "Project Tyohar",
      venue: "Spara Boutique Resort, Delhi/NCR",
      price: "₹1050 onwards"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1755583975/i2jrubtjjelqzouw7tk7.jpg",
      date: "Sat, 04 Oct, 5:00 PM",
      title: "Eric Prydz India 2025 | Delhi",
      venue: "IG Indoor Stadium, Delhi/NCR",
      price: "₹3200 onwards"
    }
];

const events = [
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754319439/gjzedwmrxfdboi45secc.jpg",
      offer: "Pay only 50% to reserve your tickets",
      date: "Sun, 09 Nov, 7:00 PM",
      title: "Akon India Tour 2025 | Delhi",
      venue: "Gate No 14, Jawaharlal Nehru Stadium, Delhi/NCR",
      price: "₹2999 onwards"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754774154/mpbsphe9xaawrfkmmc2j.png",
      date: "Thu, 02 Oct, 10:00 AM",
      title: "Screening of India vs West Indies 1st Test",
      venue: "Drink and Dine by Terrace - Spectrum@metro Sec-75, Noida, Noida",
      price: "₹999 onwards"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754650703/ugocprxv99glkkr06hcp.jpg",
      date: "September 30 | 8:30PM - 2AM",
      title: "OffBeat Garba | Ahmedabad",
      venue: "Anokhi Greens, Ahmedabad",
      price: "₹5000"
    },
    {
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757302023/sykymhhzd1cf2yqba2eh.jpg",
      offer: "Pay only 50% to reserve your tickets",
      date: "22 Nov - 23 Nov, 3PM",
      title: "Rolling Loud India | Hip-Hop Festival | Karan Aujla, Central Cee",
      venue: "Loud Park, Kharghar, Mumbai",
      price: "₹7000 onwards"
    }
];

const sports = [
  {
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1759315588/haafhaj5nltjfwgj1hgy.jpg",
    title: "G.O.A.T India Tour 2025 | Lionel Messi | Delhi",
    date: "Mon, 15 Dec, 1:30 PM",
    venue: "Arun Jaitley Stadium, Delhi/NCR",
    price: "Coming soon"
  },
  {
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757230345/dnlv4xcppqoofy6j5bd6.jpg",
    title: "PKL 2025: Bengaluru Bulls vs Patna Pirates",
    date: "Thu, 16 Oct, 7:30 PM",
    venue: "Thyagaraj Stadium, Delhi/NCR",
    price: "₹250 onwards"
  },
  {
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1759730350/pcrmuuxa4qcjgczaxqqi.jpg",
    title: "Royal Enfield Motoverse 2025",
    date: "Fri, 21 Nov, 12:00 PM",
    venue: "Hill Top Goa, Goa",
    price: "₹3499 onwards"
  },
  {
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1759235773/kbz1gvvjbjj0y0vosv8s.jpg",
    title: "Blitz & Brews - Chess over Coffee",
    date: "Sat, 11 Oct, 10:00 AM",
    venue: "Café Caffeinated, Noida",
    price: "₹99"
  }
];

const arra = [
    {
      img: "https://cdn.district.in/movies-assets/images/cinema/Jolly-LLB-3-8d8cdbe0-912d-11f0-8019-875567686725.jpg",
      title: "Jolly LLB 3",
      desc: "UA16+ | Hindi"
    },
    {
      img: "https://cdn.district.in/movies-assets/images/cinema/Mirai_Poster-0a49a020-8894-11f0-8446-27b6e78c9dfe.jpg",
      title: "Mirai",
      desc: "UA16+ | Hindi and 1 more"
    },
     {
      img: "https://cdn.district.in/movies-assets/images/cinema/Ajey--The-Untold-Story-of-a-Yogi-868daf60-4298-11f0-aa9f-8fefdb33bbbf.jpg",
     title: "Ajey: The Untold Story of a Yogi",
     desc: "UA13+ | Hindi"
    },
    {
      img: "https://cdn.district.in/movies-assets/images/cinema/The-bengal-files_Poster-06975e80-7b57-11f0-9b57-a9dda541a3eb.jpg",
      title: "The Bengal Files",
      desc: "A | Hindi"
    }
  ];

  const arrb = [
    {
      img: "https://cdn.district.in/movies-assets/images/cinema/Jolly-LLB-3-8d8cdbe0-912d-11f0-8019-875567686725.jpg",
      title: "Jolly LLB 3",
      desc: "UA16+ | Hindi"
    },
    {
      img: "https://cdn.district.in/movies-assets/images/cinema/Demon-Slayer--Kimetsu-no-Yaiba-c6cc0440-897a-11f0-b1de-a3084bc80484-f58703c0-8984-11f0-82d0-958feffd3445.jpg",
      title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
      desc: "UA13+ | Japanese and 2 more"
    },
     {
      img: "https://cdn.district.in/movies-assets/images/cinema/The-Conjuring_Poster-86ebe5e0-7857-11f0-8de0-9d1c38983d05-8c5c0300-8727-11f0-8e2c-67968f98ef92.jpg",
     title: "The Conjuring: Last Rites",
     desc: "A | English and 1 more"
    },
    {
      img: "https://cdn.district.in/movies-assets/images/cinema/Mirai_Poster-0a49a020-8894-11f0-8446-27b6e78c9dfe.jpg",
      title: "Mirai",
      desc: "UA16+ | Hindi and 1 more"
    },
  ];

  const movies = [
  {
    img: "https://cdn.district.in/movies-assets/images/cinema/Kantara-18322660-9ac5-11f0-95a0-71e5f4337a1e.jpg",
    title: "Kantara: A Legend Chapter-1",
    desc: "UA16+ | Hindi and 2 more"
  },
  {
    img: "https://cdn.district.in/movies-assets/images/cinema/Sunny-Sanskari-Ki-Tulsi-Kumari_Poster-7474f640-92ba-11f0-beb4-cb65f852835f.jpg",
    title: "Sunny Sanskari Ki Tulsi Kumari",
    desc: "UA13+ | Hindi"
  },
  {
    img: "https://cdn.district.in/movies-assets/images/cinema/Jolly-LLB-poster-4b67d990-9ac4-11f0-a697-578ce98bf125.jpg",
    title: "Jolly LLB 3",
    desc: "UA16+ | Hindi"
  },
  {
    img: "https://cdn.district.in/movies-assets/images/cinema/Shin-chan--The-Spicy-Kasukabe-Dancers-in-India-83abc550-9aa1-11f0-95a0-71e5f4337a1e.jpg",
    title: "Shin Chan The Spicy Kasukabe Dancers in India",
    desc: "U | Hindi"
  }
];

function App() {
  const [dark,setDark] = useState(false)
  return (
    <>
      <Nav dark={dark} setDark={setDark}/>
      <div className="bg-gradient-to-b from-[#efecff] to-white">
        <Carda data={arr} title="Happening this week" />
        {/* {
          arr.map((e,i)=>{
            return <Carda obj={e}/>
          })
        } */}
        <Cardb datab={arra} title="Top Hindi movies near you"/>
        <Carda data={music} title="Discover the best of Music Events" />
        <Cardb datab={arrb} title="Hits from previous weeks"/>
        <Carda data={events} title="India's Top Events" />
        <Cardb datab={movies} title="Top Hindi movies near you"/>
        <Carda data={sports} title="Sports Mania"/>
      </div>
      <Circle />
      <Footer />
    </>
  );
}

export default App