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
  let prevScrollDate :Date = new Date();

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
    prevScrollDate = new Date();
    let diff :string = getDiff(lastScrollDate.toString(), prevScrollDate.toString());
    let wrappedElement = document.getElementsByClassName('App');
    if(isBiggerThan5second(diff)){
     console.log(wrappedElement[0].getBoundingClientRect())
     // getItem(wrappedElement[0].getBoundingClientRect());
      //sendImpression()
    }
    lastScrollDate = new Date();
    if (wrappedElement[0].getBoundingClientRect().bottom <= window.innerHeight){
      setResponseNew(response.slice(0,responseNew.length + FEED_ITEMS));
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