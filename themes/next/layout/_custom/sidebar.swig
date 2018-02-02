<br/>
<div id="clock" class="motion-element">
    <p class="date" id="date">date</p>
    <p class="time" id="time">time</p>
</div>


<style>
#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
#clock .time {
  font-size: 24px;
  margin-top: -36px;
}
#clock .date {
  font-size: 16px;
}
</style>


<script type="text/javascript">
var week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var timerID = setInterval(updateTime, 1000); // 定时器
updateTime();

function updateTime() {
    var cd = new Date();
    document.getElementById('time').innerHTML = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    document.getElementById('date').innerHTML = zeroPadding(cd.getFullYear(),4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};
// 补零函数
function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
</script>
