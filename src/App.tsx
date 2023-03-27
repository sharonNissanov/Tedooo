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
import sendImpression from './utils/ImpressionHelper';

function App() {
  const [response, setResponse] = useState<any>([]);
  const [responseNew, setResponseNew] = useState<any>([]);

  let lastScrollDate :Date = new Date();
  let currentScrollDate :Date = new Date();
  let prevBounding:any ;
  let prevImpression:any ;

  const FEED_ITEMS : number = 6 ;
  const SECONDS : number = 5;

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
  currentScrollDate = new Date(); //now
  let appElement = document.getElementsByClassName('App')[0].getBoundingClientRect();
  if(prevBounding == undefined){
    prevBounding = appElement; 
  }
    let diff :string = getDiff(lastScrollDate.toString(), currentScrollDate.toString());

    if(isBiggerThan5second(diff) && response.length >0 ){ //if 5 seconds have passed
     // console.log(diff, lastScrollDate.toString(), currentScrollDate.toString())
      prevBounding = appElement; 
      lastScrollDate = new Date();
      checkWhatItemWatched();
    }
    
    if (appElement.bottom <= window.innerHeight){
      setResponseNew(response.slice(0, responseNew.length + FEED_ITEMS)); //load next 6 items 
    } 

  };

  //check if the differece is bigger than 5 seconds
  function isBiggerThan5second(str:string):boolean{
    if(str.includes("seconds")){
      let number: any = str.slice(0, str.length  - "seconds".length  - 1 ); //remove " secondes"
      if(!isNaN(number) && parseInt(number) > SECONDS ){
        return true;
      }else{
        return false;
      }
    }return true;
  }

  //check if there is ant item that the user has watched, by using items bounderies
  function checkWhatItemWatched(){
    let items = document.getElementsByClassName("feed-data-item");
    for(let i=0; i< items.length ; i++){
      let item = items[i].getBoundingClientRect();
      if(item.top > 0 && item.top + item.height < window.screen.height){
        if(prevImpression == undefined){
          prevImpression = i;
          sendImpression(response[i].userId, response[i].id)
        }
        if(prevImpression != i){
          sendImpression(response[i].userId, response[i].id)
          prevImpression = i;
        }

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