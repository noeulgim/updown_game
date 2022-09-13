//타이머 만들기
let timer;
let timeCount = 0;
let elem = document.getElementById('timer');
let hour, min, sec;

  function countTime() {
    timeCount++;
    elem.innerHTML = getTimeFormatString();
  }

  function startCount() {
      countTime();
      stopCount();
      timer = setTimeout(startCount, 1000);
      document.getElementById('timer').style.backgroundColor = 'rgba(255, 255, 255, .8)';
      if( timer > 5 ){
        document.getElementById('timer').style.backgroundColor = 'rgba(245, 155, 20, .8)';
        document.getElementById('timer').style.color = '#000';
        document.getElementById('timer').style.transitionDuration = '10s';
      }
      if( timer > 15 ){
        document.getElementById('timer').style.backgroundColor = 'rgba(245, 20, 20, .8)';
        document.getElementById('timer').style.transitionDuration = '25s';
      }
  }

  function stopCount() {
    if (timer != 0) {
      clearTimeout(timer);
    }
  }

  function resetCount() {
    location.reload(true);
  }

  function getTimeFormatString() {
    hour = parseInt(String(timeCount / (60 * 60)));
    min = parseInt(String((timeCount - (hour * 60 * 60)) / 60));
    sec = timeCount % 60;
    return String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
  }

//화면 만들기
let num = Math.floor(Math.random() * 100);
let tryCount = 0;
document.getElementById('number').innerHTML = num;

function checkNum(){
  let tryNum = document.getElementById("input").value;
  tryNum = Number(tryNum);
  if( tryNum == "" ){
    document.getElementById("txtArea").innerHTML = '숫자를 입력해주세요.';
  }else if( tryNum > num ){
    document.getElementById("txtArea").innerHTML = "Down!";
    document.getElementById('screen').style.backgroundColor = 'rgb(252, 246, 126)';
  }else if( tryNum < num ){
    document.getElementById("txtArea").innerHTML = "Up!";
    document.getElementById('screen').style.backgroundColor = 'rgb(201, 255, 163)';
  }else if( tryNum == num ){
    document.getElementById("txtArea").innerHTML = '<b>정답!</b><br>시도한 횟수:<b>'+tryCount+'</b>';
    document.getElementById('screen').style.backgroundColor = 'skyblue';
    clearTimeout(timer);
    document.getElementById('timer').style.transitionProperty = 'none';

  }else{
    document.getElementById("txtArea").innerHTML = "숫자를 입력해주세요.";
  }
  tryCount ++;
}
checkNum();
