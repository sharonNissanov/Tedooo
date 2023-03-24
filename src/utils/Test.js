import getDiff from './DateHelper';

const testDate = (startDate) => {
    let today =  new Date();
    let dates=[
        // {d:'Fri, 24 Mar 2023 12:49:10 GMT', res:"51"},
        // {d:"Fri, 22 Mar 2023 12:49:10 GMT", res: " "},
        // {d:'Fri, 24 Mar 2022 12:50:10 GMT', res: " "},
        // {d:'Fri, 24 Mar 2020 12:50:10 GMT', res: " "},
        // {d:'Fri, 24 Mar 2021 12:50:10 GMT', res: " "},
        // {d:"1997-04-14T18:53:30.104Z", res: "25 years"},
        // {d:'Fri, 24 Mar 1994 12:50:10 GMT',  res: "25 "},
        // {d:'Fri, 24 Mar 2023 12:50:10 GMT', res: "25 "},
        {d: new Date((new Date()).setHours((new Date).getHours()-1)).toString() , res: "1 hour"},
        {d: new Date((new Date()).setHours((new Date).getHours()-25)).toString() , res: "1 day"},

        {d: new Date((new Date()).setYear((new Date).getUTCFullYear()-2)).toString() , res: "1 year"},
        {d: new Date((new Date()).setYear((new Date).getUTCFullYear()-3)).toString() , res: "2 years"},
       
        {d: new Date((new Date()).setHours((new Date).getHours()-1)).toString() , res: "1 hour"},
        {d: new Date((new Date()).setHours((new Date).getHours()-1)).toString() , res: "1 hour"},


        {d: new Date((new Date()).setMonth((new Date).getUTCMonth()-1)).toString() , res: "1 month"},
        {d: new Date((new Date()).setHours((new Date).getHours()-2)).toString() , res: "2 months"},

 

    ];
    // new Date().setHours(today.getHours()+1)
    //  today.setHours(today.getHours()+1)
    // dates.forEach(date=>{
    //     getDiff(date.d)
    //     //console.log( new Date().toLocaleString()  , new Date(date.d).toLocaleString(), getDiff(date.d), date.res )
    //  //   console.log(getDiff(date.d) , getDiff(date.d) ==  date.res )
    // })


}
export default testDate;