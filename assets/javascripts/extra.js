function setHeight(el, val) {
  if (typeof val === "function") val = val();
  if (typeof val === "string") el.style.height = val;
  else el.style.height = 85 + "px"; //val + "px";
}

var equalHeight = function(container){
  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;

  Array.from(document.querySelectorAll(container)).forEach((el,i) => {
    console.log('element = ', el);
    el.style.height = "auto";
    topPostion = el.offsetTop;
    if(currentRowStart != topPostion){
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        setHeight(rowDivs[currentDiv], currentTallest)
      }
      rowDivs.length = 0;
      currentRowStart = topPostion;
      currentTallest = parseFloat(getComputedStyle(el, null).height.replace("px", ""))
      rowDivs.push(el);
    } else {
      rowDivs.push(el);
      currentTallest = (currentTallest < parseFloat(getComputedStyle(el, null).height.replace("px", ""))) ? (parseFloat(getComputedStyle(el, null).height.replace("px", ""))) : (currentTallest);
    }
    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      setHeight(rowDivs[currentDiv], currentTallest)
    }
  })
}

function setHeight2(el, val) {
  if (typeof val === "function") val = val();
  if (typeof val === "string") el.style.height = val;
  else el.style.height = val + "px";
}

function equalHeight2(container) {
  let currentTallest = 0;
  let currentRowStart = 0;
  let rowDivs = [];
  let topPosition = 0;

  document.querySelectorAll(container).forEach((el) => {
    el.style.height = "auto"; // Reset height for accurate calculations
    topPosition = el.offsetTop;

    if (currentRowStart !== topPosition) {
      // New row detected, apply heights to previous row
      rowDivs.forEach((rowEl) => setHeight2(rowEl, currentTallest));

      // Reset for the new row
      rowDivs = [el];
      currentRowStart = topPosition;
      currentTallest = el.offsetHeight;
      console.log('currentTallest', el, el.offsetHeight)
    } else {
      // Same row, compare height
      rowDivs.push(el);
      currentTallest = Math.max(currentTallest, el.offsetHeight);
    }
  });

  // Apply heights to the last row
  rowDivs.forEach((rowEl) => setHeight2(rowEl, currentTallest));
}

window.addEventListener("load", function(){
  console.log('setHeight load eventlistener activated')
  equalHeight2('.blog-title');
});
window.addEventListener("resize", function(){
  console.log('setHeight resize eventlistener activated')
  setTimeout(function(){
    equalHeight2('.blog-title');
  })
});