import { useState, useEffect } from 'react';
import './App.css';
import { Card } from '@mui/material';
import User from './components/User';
import Content from './components/Content';
import ButtonsBar from './components/LikeAndComment';
import getData from './utils/ApiHelper';
import testDate from './utils/Test';

import MenuComponent from './components/Menu'
import getDiff from './utils/DateHelper';

function App() {
  const [response, setResponse] = useState<any>([]);
  const [responseNew, setResponseNew] = useState<any>([]);
  let scrolling:boolean = false;
  let sendImpr:boolean = false;
  let lastScrollDate :Date = new Date();
  let currentScrollDate :Date = new Date();
  let prevPosition:any ;
  const FEED_ITEMS : number = 6 ;

 useEffect(() => {
  const fetchData = async () => {
    let res = await getData();
    setResponse(res);
    setResponseNew(res.slice(0, FEED_ITEMS ));
   // testDate()
   
  };
  fetchData();

}, []);

document.addEventListener('scroll', ()=>{trackScrolling();});

//execute when user scroll the page
function trackScrolling():void{
  currentScrollDate = new Date();
  let appElement = document.getElementsByClassName('App')[0].getBoundingClientRect();
  if(prevPosition == undefined){
    prevPosition = appElement; 
  }
    let diff :string = getDiff(lastScrollDate.toString(), currentScrollDate.toString());

    if(isBiggerThan5second(diff)){ //if 5 seconds have passed
      prevPosition = appElement; 
      lastScrollDate = new Date();
      sendImpression();
    }
    
    if (appElement.bottom <= window.innerHeight){
      setResponseNew(response.slice(0, responseNew.length + FEED_ITEMS)); //load next 6 items 
    } 

  };

  //check if the differece is bigger than 5 seconds
  function isBiggerThan5second(str:string):boolean{
    if(str.includes("seconds")){
      let number: any = str.slice(0, str.length  - "seconds".length  - 1 ); //remove " secondes"
      if(!isNaN(number) && parseInt(number) > 5 ){
        console.log("bigger-------------------------------------------------------- ", number)
        return true;
      }else{
        return false;
      }

    }return true;
  }

  function sendImpression(){
    let items = document.getElementsByClassName("feed-data-item");
    for(let i=0; i< items.length ; i++){
      let item = items[i].getBoundingClientRect();
      if(item.top > 0 && item.top + item.height < window.screen.height){
        console.log(i)
      }
    }
  }

  return (
    <div className="App">
      <MenuComponent/>
      {
      responseNew.map((data: any, index: number) => (
      
        <Card key={index} className='feed-data-item' >
          <User username = {data.username} 
          userId= {data.userId} 
          avatar={data.avatar} 
          shopName = {data.shopName}
          shopId =  {data.shopId}
          premium =  {data.premium}
          date =  {data.date}
          />

          <Content text = {data.text} imgs = {data.images} />

          <ButtonsBar  didLike={data.didLike}  likes ={data.likes} comments ={data.comments}/>
      </Card>

      ))} 
    </div>
  );
}

export default App;