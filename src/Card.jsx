

const Card=({card,index, selected})=> {
    return(
        <>
    <div className="h-full relative">
        <div className={`h-full rounded-xl flex flex-col items-center justify-center ${card.bgCardColor} z-10 relative p-4 transition-all ease-in-out duration-[3000ms]`}
        style={{
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${card.Bgimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3, 
            zIndex: -1
          }}></div>
            <h1 className={`${card.textColor} ${selected===index ? "text-[3rem] rotate-[0] mt-4":"text-[2rem] rotate-90"} transition-all ease-in-out duration-[3000ms] font-bold`}> {card.title}</h1>
            
            {selected === index && (
            <p className={`${card.textColor} mt-4 text-center transition-all ease-in-out duration-[3000ms]`}>{card.desc}</p> 
        )}
        </div>
        <img src={card.img} className={`img z-1 ${selected === index ? "opacity-1":"opacity-0"} w-60 absolute top-0 ` } alt=""/>
    </div>
    </> 
)}
export default Card;