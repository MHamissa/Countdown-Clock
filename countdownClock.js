var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');
var startBtn=document.getElementById('startBtn');
var resetBtn=document.getElementById('resetBtn');
var outputTime=document.getElementById('outputTime');
var timer;
startBtn.addEventListener('click',function (){
let min=minutes.value;
let sec=seconds.value;
if (min===''||sec==='') {
   alert('Enter Time first!!!');
}else{
 timer= setInterval(function (){
      if (sec>0) {
              outputTime.innerHTML=`${min}`+":"+`${sec}`;
sec--;
      }else if (sec===0&& min>0) {
       
         sec=60;
               outputTime.innerHTML=`${min}`+":"+`${sec}`;
min--;

      } else{
         outputTime.innerHTML="00:00";
      }
   },1000);
}});
resetBtn.addEventListener('click',function(){
outputTime.innerHTML="00:00";
clearInterval(timer);
});