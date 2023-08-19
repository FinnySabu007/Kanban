import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Priority() {
    let parsedData =""
    const [ticketarr,setticket] = useState([])

    

    var handleNextClick = async()=>{
      try{let url = "https://api.quicksell.co/v1/internal/frontend-assignment"
      let data = await fetch(url);  
      parsedData = await data.json()
      setTimeout(()=>{setticket(parsedData.tickets)  },0)
          
      
    }
    catch(error){
      console.log(error)
    }
    
    }

    

    useEffect(() => {
      handleNextClick()
      
    },[]);
  
  return (
    
    <>
        <div id="priority"> 
          <div id="section">
            <div id="head"><h5>No Priority</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 0){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
            
          </div>
          <div id="section">
            <div id="head"><h5>Urgent</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 4){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>High</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 3){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>Medium</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 2){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>Low</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.priority == 1){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
        </div>
        
    </>
  )
}
