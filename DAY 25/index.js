function changeColor(){
    let a = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let d = Math.floor(Math.random() * 256);

    let color = "rgba(" + a + "," + b + "," + c + "," + d + ")";
    document.getElementById("colorFlipper").style.backgroundColor = color;
}