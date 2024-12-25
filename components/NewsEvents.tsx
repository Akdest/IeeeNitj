"use client"

import React from 'react';
import {Michroma, Montserrat} from 'next/font/google'
import { StaticImageData } from 'next/image';

import demo from '../public/Demo.png'

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
      fontSize:"2.2rem", textAlign:"center", fontWeight:100, color:"black",
      fontFamily:'Michroma',
      WebkitTextStrokeWidth:1,
      WebkitTextStrokeColor:'#8A92DD',
      textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
      paddingTop:"15px", paddingBottom:"15px",
    }

    return (
      <div className={michroma.className} style={headingStyle}>
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
      <div style={{margin:"5px", height:"100%", width:"35%", boxSizing:"border-box"}}>
        <Heading text='NEWS' />

        {/* Bubble Container */}
        {/* Implement auto scroll in the future */}
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",
          height:"85%", boxSizing:"border-box", 
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
        backgroundColor:"#8DB5F1", borderRadius:"15px", width:"40%", height:"65%",
        border:"2px solid #8CA9DF",
        boxShadow: '2px 2px 5px rgba(128, 128, 128, 0.5)'
      }
      const EventImageStyle:React.CSSProperties = {
        width:'96%', height:"96%", borderRadius:"11px",
        backgroundImage: `url(${props.img.src})`, backgroundSize: 'cover'
      }

      return (
        <>
        <div style={EventCardStyle}>
      
          {/* Image Card */}
          <div style={{width:"100%", height:"65%", padding:"4%"}}>
              <div style={{width:"100%", borderRadius:"15px", height:"100%", 
                border:"2px solid #8CA9DF", backgroundColor:"#D9D9D9", display:"flex", 
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
            <div style={{width:"30%", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <div style={{width:'100%',aspectRatio:"1/1", borderRadius:"50%", 
                backgroundColor:"#869bca", padding:"5px", margin:"10px"
              }} />
            </div>

          </div>
        </div>
        </>
      )
    }

    return (
      <div style={{margin:"5px", width:"65%", boxSizing:"border-box"}}>
        <Heading text='UPCOMING EVENTS' />

        {/* Event Card List Div */}
        <div style={{height:'85%', display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
          <EventCard img={demo} text={'lorem ipsum ieee'} />
          <EventCard img={demo} text={'lorem ipsum ieee'} />
        </div>

      </div>
    )
  }

  return (
    <div style={{height:"100svh", width:"100svw",padding:"5vw"}}>
      <div style={{background:"linear-gradient(to bottom, #E0F5FF, #AFCFF1)", height:"100%", width:"100%", borderRadius:'30px', display:"flex"}}>
        
        <Events/>
        <News/>

      </div>
    </div>
  )
};
  