"use client"

import React from 'react';
import {Michroma, Montserrat} from 'next/font/google'
import { StaticImageData } from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import demo from '../../../public/Demo.png'

const michroma = Michroma({ weight: ['400'], subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400'], subsets: ['latin'] });

// Define the props type
interface HeadingProps {
  text: string;
}
interface NewsBubbleProps {
  text: string;
}
interface EventCardProps {
  text: string;
  img: StaticImageData;
}

export default function NewsEvents() {

  const Heading: React.FC<HeadingProps> = (props) => {

    const  headingStyle: React.CSSProperties = {
      // fontSize:"2.2rem", 
      textAlign:"center", fontWeight:100, color:"black",
      fontFamily:'Michroma',
      WebkitTextStrokeWidth:1,
      WebkitTextStrokeColor:'#8A92DD',
      textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
      paddingTop:"15px", paddingBottom:"15px",
    }

    return (
      <div className={`${michroma.className} text-[1.6rem] sm:text-[2.2rem]`} style={headingStyle}>
        {
          props.text.split(' ').length>1?
          <>
          {props.text.split(' ').slice(0,-1).join(' ')}{" "}
          <span style={{color:"#004E92"}}>{props.text.split(' ').slice(-1)}</span>
          </>: <>{props.text}</>
        }
      </div>
    )
  }

  function News() {


    const newsData = ['Neque porro quisquamest qui dolorem ipsum','This is some very interesting news', 'This is some more, less interesting news', 
      'more news', 'Link to backend later........']
    
    const NewsBubble: React.FC<NewsBubbleProps> = (props) => {

      const divStyle: React.CSSProperties = {
        backgroundColor:"#94C4FB", border:"2px solid #8AB6E8", borderRadius:"45px",
        width:"90%", color:"black", paddingLeft:"5px", paddingRight:"10px",
        textAlign:"center", display:"flex", fontSize:"0.87rem",
        boxShadow: '2px 2px 5px rgba(128, 128, 128, 0.5)'

      }

      return (
        <div style={divStyle}>
          <div style={{width:"5%", borderColor:"#0C377B", borderStyle:"solid", marginTop:"3%", marginBottom:"3%", borderRightWidth:"2px", height:"auto"}}></div>
          <div style={{width:'95%', padding:"10px"}} className={montserrat.className}>
            {props.text}
          </div>
        </div>
      )
    }

    return (
      <div className='w-[95%]' style={{margin:"5px", height:"100%", boxSizing:"border-box"}}>
        <Heading text='NEWS' />

        {/* Bubble Container */}
        {/* Implement auto scroll in the future */}
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",
          height:"85%", boxSizing:"border-box", justifyContent:"center",
          paddingTop:"10px", paddingBottom:"10px", overflow:"auto", gap:"15px"
        }}>
          {
            newsData.map((n,k)=>
              <NewsBubble key={k} text={n}/>
            )
          }

        </div>

      </div>
    )
  }

  function Events() {

    const EventCard: React.FC<EventCardProps> = (props) => {

      const EventCardStyle:React.CSSProperties = {
        backgroundColor:"#1976D2BF", borderRadius:"15px 15px 0px",
        border:"2px solid #1976D2",
        boxShadow: '2px 2px 5px black'
      }
      const EventImageStyle:React.CSSProperties = {
        width:'100%', height:"100%", borderRadius:"11px",
        backgroundImage: `url(${props.img.src})`, backgroundSize: 'cover', borderColor:"#1976D2", borderWidth:"1px",
      }

      return (
        <>
        <div className='w-[95%] sm:w-[40%] h-[40%] sm:h-[65%]' style={EventCardStyle}>
      
          {/* Image Card */}
          <div style={{width:"100%", height:"65%", padding:"4%"}}>
              <div style={{width:"100%", borderRadius:"15px", height:"100%", 
                border:"2px solid #1976D2", backgroundColor:"#D9D9D9", display:"flex", 
                alignItems:"center", justifyContent:"center"}}>
                <div style={EventImageStyle}/>
              </div>
          </div>  

          {/* Lower Section */}
          <div style={{height:"35%",
            display:"flex"
          }}>
            {/* Text Section */}
            <div style={{width:"70%", textAlign:"center"}}>
              {props.text}
            </div>
            {/* Button Section */}
            <div className=' bg-blue-200' style={{width:"30%", display:"flex", alignItems:"center", justifyContent:"center",position:'relative',right:'-25px',top:'14px',borderRadius:'45%'}}>
              <div className=" w-[60%] md:w-full aspect-square rounded-full bg-[#1976D2] p-[5px] m-[10px] shadow-[1px_1px_5px_black] relative -right-[10px] cursor-pointer"
              />
              <FiExternalLink 
  className="relative right-8 text-[20px] md:text-[40px] md:right-10 cursor-pointer"
/>

            </div>
          </div>
        </div>
        </>
      )
    }

    return (
      <div className='w-[90%] sm:w-[65%]' style={{margin:"5px auto", height:"100%", boxSizing:"border-box"}}>
        <Heading text='UPCOMING EVENTS' />

        {/* Event Card List Div */}
        <div className='h-[80%] sm:h-[85%] flex-col sm:flex-row' style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
          <EventCard img={demo} text={'lorem ipsum ieee'} />
          <EventCard img={demo} text={'lorem ipsum ieee'} />
        </div>

      </div>
    )
  }

  return (
    <div className='h-[200svh] sm:h-[100svh]' style={{width:"100%",padding:"5vw"}}>
      <div className='h-[95svh] sm:h-[100%]' 
      style={{
        // background:"linear-gradient(to bottom, #E0F5FF, #AFCFF1)",
         width:"100%", borderRadius:'30px', display:"flex"}}>
        
        <Events/>
        <div className='hidden sm:block border-black border-[1.5px] border h-[70%] m-auto'></div>
        <div className='hidden sm:block flex flex-row items-center justify-center'>
          <News/>
        </div>

      </div>
      <div className='flex sm:hidden' style={{
        // background:"linear-gradient(to bottom, #E0F5FF, #AFCFF1)", 
        height:"95svh",marginTop:"5svh", width:"100%", borderRadius:'30px'}}>
        <News/>
      </div>
    </div>
  )
};
  