/**
 * Created by alebul on 14.06.2016.
 */

function blinkTitle(str, time){
  var title, title1, i;
  title = document.title;
  title1 = str;

  function blink() {
    if(document.title == title1) {
      document.title = title;
    }
    else {
      document.title = title1;
    }
  }

  setInterval(blink, time);

}

function clock() {

  function getTime(){
    var time, strtime;
    var getclock = document.querySelector(".clock");
    time = new Date();
    getclock.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  }

  setInterval(getTime, 1000);
}
