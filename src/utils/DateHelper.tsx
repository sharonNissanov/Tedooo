import { formGroupClasses } from "@mui/material";

/**
 * calc and returns the differenct between compareTo and today
 * @param startDate 
 * @param compareTo 
 */

const getDiff = (startDate:string, compareTo:any = undefined) => {
    let second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7,month=day*30 , year=(1000*60*60*24*365);
    let date1:any = new Date(startDate);
    let date2:any = compareTo == undefined ? new Date() : new Date(compareTo); //today
    let timediff:any = date2 - date1;
    let resStr:any;
    let resValue:any;
    let units:any =[
        {unit:second, max: 60, name:" seconds"},
        {unit:minute, max: 60, name:" minutes"},
        {unit:hour, max: 24, name:" hours"},
        {unit:day, max:30, name:" days"},
        {unit:week, max: 4, name:" weeks"},
        {unit:month, max: 12, name:" months"},
        {unit:year, max: null, name:" years"}
    ]
    units.forEach((data:any)=>{
        data.diff =  Math.floor(timediff / data.unit);
        if(data.max != null ){
            if( data.diff <  data.max && resStr == undefined){
                resStr = data.diff + data.name;    
                resValue = data.diff; 
            }
        }
         if(data.max == null &&  resStr == undefined) { //years case
            resStr = data.diff + data.name;
            resValue = data.diff; 
        }
    });


    if(resValue == 1 && resStr != undefined){
        resStr = resStr.slice(0,resStr.length - 1 )
    }

   //console.log(date1.toLocaleString(), units, resStr)
   //console.log(resValue)

    return resStr;
}
export default getDiff;