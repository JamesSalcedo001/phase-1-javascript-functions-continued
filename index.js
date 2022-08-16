// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();



  function wrapAdjective(v1 = '*', v2 = '||') {
    return function (v3 = "special") {
        return `You are ${v1}${v3}${v1}!` ;
    };
  }
  