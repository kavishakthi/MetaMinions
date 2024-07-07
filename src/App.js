import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import captain from './assets/captain.png';
import thor from './assets/thor.png';
import iron from './assets/iron.png';
import blackwidow from './assets/blackwidow.png';
import Ironbg from './assets/Ironbg.jpg'
import CapBg from './assets/capbg.jpg';
import ThorBg from './assets/Thorbg.jpg'
import BlackpanBg from './assets/BlackpanBg.jpg'
import BlackWidBg from './assets/blackwidBg.jpg'
import blackpanther from './assets/blackpanther.png';
import Card from "./Card";
import Logo from "./assets/logo.jpg"

function App() {
  const [selected,setSelected]=useState(0);
  // const [bgImage, setbgImage] = useState(''); 
  const cards=[
    {
      title:'CAPTAIN AMERICA',
      bgCardColor:"bg-[#05235C]",
      bgColor:"#122F65",
      textColor:'text-white',
      img:captain,
      Bgimg : CapBg,
      desc:"He is honest, up-front, loyal, extremely noble, and unfailingly dependable. His strengths don't lie in creativity or brilliance, especially when compared to some other Avengers, but he is the one who can step in and lead all the complex personalities, skill sets, strengths, and weaknesses of this diverse team."
    },
    {
      title:'IRON MAN',
      bgCardColor:"bg-[#fbca03]",
      bgColor:"#aa0505",
      textColor:'text-white',
      img:iron,
      Bgimg : Ironbg,
      desc:"A genius billionaire inventor and CEO of Stark Industries who builds a high-tech suit of armor to fight crime and protect the world. Known for his wit, intelligence, and technological prowess."
    },
    {
      title:'THOR',
      bgCardColor:"bg-[#AE241D]",
      bgColor:"#121213",
      textColor:'text-white',
      img:thor,
      Bgimg : ThorBg,
      desc:"The Norse God of Thunder from Asgard, wielding the magical hammer Mjolnir. He possesses immense strength, the ability to control lightning, and the power of flight. Thor is known for his bravery, loyalty, and heroic spirit."
    },
    {
      title:'BLACK WIDOW',
      bgCardColor:"bg-[#ff0000]",
      bgColor:"	#101010",
      textColor:'text-white',
      img:blackwidow,
      Bgimg : BlackWidBg,
      desc:"A highly skilled spy and assassin with expertise in hand-to-hand combat and espionage. Formerly a Russian agent, she joins S.H.I.E.L.D. and later the Avengers, using her skills and intelligence to fight for justice."
    },
    {
      title:'BLACK PANTHER',
      bgCardColor:"bg-[#664EAE]",
      bgColor:"#0C0B13",
      textColor:'text-white',
      img:blackpanther,
      Bgimg : BlackpanBg,
      desc:"The king of Wakanda, a technologically advanced African nation. He possesses enhanced abilities from the Heart-Shaped Herb and wears a suit made of vibranium. "
    },
  ];

  const cardsRef=useRef([]);
  cardsRef.current=[]
  const bg=useRef();

  const handleClick=(key)=>{
    setSelected(key)
    //setbgImage(cards[key].Bgimg);
  };

  // useEffect(() => {
  //   const selectedCard = cards[selected];
  //   setbgImage(selectedCard.Bgimg);
  //   console.log("Background Image URL:", bgImage);
  // }, [selected][bgImage]);

  useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
      gsap.utils.toArray(cardsRef.current).forEach((card,index)=>{
        if(`card-${index} === card - ${selected}`){
          gsap.to(bg.current,{
            // backgroundImage: `url(${cards[index].Bgimg})`,
            backgroundColor:cards[index].bgColor,
            duration:1,
            ease:'none'
          });

          gsap.to(".img",{
            top:"-140px",
            delay:0.7,
            duration:2,
            ease:"none"
          });
        }
      })
    })
    return ()=> ctx.revert();
    }, [selected])
  const addToRef=(el)=>{
    if(el && !cardsRef.current.includes(el)){
      cardsRef.current.push(el);
    }
  }
  return (

   <div ref={bg} className="h-screen flex flex-col items-center justify-start">
      <nav className="w-full bg-gray-800 text-white py-4 px-5">
        <ul className="flex justify-end  space-x-20">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center justify-center mt-40">

      <div className="absolute top-4 left-4">
        <div className="bg-black rounded-full shadow-md overflow-hidden w-20 h-20">
          <img src={Logo} alt="Logo" className="object-cover w-full h-full rounded-full" />
        </div>
      </div>
    {cards.map((card,key)=>{
      return(
        <div 
        ref={addToRef}
        key={key}
        className={`card-${key}   ${key===selected ? "w-[500px]":"w-20"} 
        h-96 cursor-pointer transition-all ease-in-out duration-[3000ms] mt-35`}
         onClick={()=>handleClick(key)}>
          <Card card={card} selected={selected} index={key}/>
          </div>
      )
    })

    }
    </div>
  </div>
  )
}

export default App;