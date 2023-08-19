import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Priority(props) {
    let parsedData =""
    const [ticketarr,setticket] = useState([])
    const [userarr,setuser] = useState([])
    

    var handleNextClick = async()=>{
      try{let url = "https://api.quicksell.co/v1/internal/frontend-assignment"
      let data = await fetch(url);  
      parsedData = await data.json()
      setTimeout(()=>{setticket(parsedData.tickets)
                     setuser(parsedData.users)  },0)
      if(props.order =="title"){
        let ticket = []
        ticket = parsedData.tickets
        const sorted = ticket.sort((a,b) => {
          return a.title.localeCompare(b.title);
        })
        setTimeout(()=>{setticket(sorted)  },0)
      }else if(props.order == "priority"){
        let ticket = []
        ticket = parsedData.tickets
        const sortedArrayDescending = ticket.sort((a, b) =>b.priority-a.priority);
        setTimeout(()=>{setticket(sortedArrayDescending)  },0)
      }
      
    }
    catch(error){
      console.log(error)
    }
    
    }

    

    useEffect(() => {
      handleNextClick()
      
    },[props]);
  
  return (
    
    <>
        <div id="priority"> 
          <div id="section">
            <div id="head"><h5>No Priority</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 0){
                return <Card key={elem.id} id = {elem.id} title = {elem.title} name={userarr.map((el)=>{ if(elem.userId == el.id){return el.name[0]} })}></Card>
              }
              
            })}
            
          </div>
          <div id="section">
            <div id="head"><h5>Urgent</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 4){
                return <Card key={elem.id} id = {elem.id} title = {elem.title} name={userarr.map((el)=>{ if(elem.userId == el.id){return el.name[0]} })}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>High</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 3){
                return <Card key={elem.id} id = {elem.id} title = {elem.title} name={userarr.map((el)=>{ if(elem.userId == el.id){return el.name[0]} })}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>Medium</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 2){
                return <Card key={elem.id} id = {elem.id} title = {elem.title} name={userarr.map((el)=>{ if(elem.userId == el.id){return el.name[0]} })}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>Low</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 1){
                return <Card key={elem.id} id = {elem.id} title = {elem.title} name={userarr.map((el)=>{ if(elem.userId == el.id){return el.name[0]} })}></Card>
              }
              
            })}
          </div>
        </div>
        
    </>
  )
}
