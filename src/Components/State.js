import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function State() {
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
            <div id="head"><h5>Backlog</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.status == "Backlog"){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
            
          </div>
          <div id="section">
            <div id="head"><h5>Todo</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.status == "Todo"){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>In progress</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.status == "In progress"){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>Done</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.status == "Done"){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
          <div id="section">
            <div id="head"><h5>Canceled</h5></div>
            {ticketarr.map((elem)=>{
              if(elem.status == "Canceled"){
                return <Card key={elem.id} id = {elem.id} title = {elem.title}></Card>
              }
              
            })}
          </div>
        </div>
        
    </>
  )
}
