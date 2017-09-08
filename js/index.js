var theater = theaterJS()

theater
.on('type:start, erase:start', function () {
  theater.getCurrentActor().$element.classList.add('actor__content--typing')
})
.on('type:end, erase:end', function () {
  theater.getCurrentActor().$element.classList.remove('actor__content--typing')
})
.on('type:start, erase:start', function () {
  if (theater.getCurrentActor().name === 'tlx') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

theater
.addActor('tlx', { speed: 0.8, accuracy: 0.6 })
.addActor('hyh')
.addScene('tlx:你今晚怎么了，是我们今天相处的不愉快么？', 600)
.addScene('hyh:没有，我只是情绪有点低落。我先跑步去了。', 400)
.addScene('tlx:等你跑完步，有什么想说的你就说出来吧！', 400)
.addScene('hyh:', 5000)
.addScene('hyh:我想这样一直关心你，', 500, '以后...', -5, '以后就让我一直这样照顾你，可以么？', 600)
.addScene('tlx:', 3000)
.addScene('tlx:可是我毕业以后可能要回老家工作。', 1000)
.addScene('hyh:如果你回老家，我去深圳找工作；', 600)
.addScene('hyh:如果你在云南发展，我就在昆明陪你。', 400)
.addScene('tlx:', 2000)
.addScene('tlx:可是我现在好迷茫，我也不知道我以后想去做什么。', 1600)
.addScene('hyh:没有关系，我们慢慢想，慢慢尝试。', 500)
.addScene('tlx:行行行，在一起吧。', 6000)
.addScene('hyh:我真的喜欢和你在一起。', 500)
.addScene('tlx:你别欺负我，我会揍你的！', 800)
.addScene('hyh:我肯定不还手。', 1000)
.addScene(theater.replay.bind(theater))


// timer
var timer;

var loveDate = new Date("2017/08/13 23:30:00");

timer = setInterval(function() {
  timeBetweenDates(loveDate);
}, 1000);

function timeBetweenDates(loveDate) {
  var now = new Date();
  var difference = now.getTime() - loveDate.getTime();

  if (difference <= 0) {
    // Timer done
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = PrefixInteger(hours, 2);
    minutes = PrefixInteger(minutes, 2);
    seconds = PrefixInteger(seconds, 2);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

function PrefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}
