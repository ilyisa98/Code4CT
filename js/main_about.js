
//getting my canvas from html
var can1 = document.getElementById('my_canvas1').getContext('2d');
var can2 = document.getElementById('my_canvas2').getContext('2d');
var can3 = document.getElementById('my_canvas3').getContext('2d');
var can4 = document.getElementById('my_canvas4').getContext('2d');

//end point of progress bar
var end1 = 0;
var end2 = 0;
var end3 = 0;
var end4 = 0;

//start point of progress bar
var start = 4.72;

//width and height of my canvas
var cw = can1.canvas.width;
var ch = can1.canvas.height; 

//
var diff;
var diff2;
var diff3;
var diff4;
     
var sim = setInterval(progressSim, 50); //timer
function progressSim(){
    
    //canvas 1
	diff = ((end1 / 100) * Math.PI*2*10).toFixed(2);
    
	
	//Clears the specified pixels within a given rectangle
	can1.clearRect(0, 0, cw, ch);
	
	//progress bar width
	can1.lineWidth = 10;
	
    //Sets or returns the color, gradient, or pattern used to fill the drawing
	can1.fillStyle = '#E38F84';
    
	//Sets or returns the color, gradient, or pattern used for strokes
	can1.strokeStyle = "#E38F84";
    
	//Aligns percentage in the center of the canvas
	can1.textAlign = 'center';
    
	
	//Draws "filled" percentage on the canvas
	can1.fillText( end1 +'%', cw*.5, ch*.5+2, cw);
    
	//Begins a path, or resets the current path
	can1.beginPath();
    
	//Creates an arc for circle
	can1.arc(35, 35, 30, start, diff/10+start, false);
    
	
	//draws the path
	can1.stroke();
	
	if(end1 >= 80){
		clearTimeout(sim);//stop counting
	  
	}
	end1++; //counter    

}

var sim_2 = setInterval(progressSim2, 50); //timer
function progressSim2(){

	//canvas 2
	diff2 = ((end2 / 100) * Math.PI*2*10).toFixed(2);
    
	can2.clearRect(0, 0, cw, ch);
	can2.lineWidth = 10;
    
	can2.fillStyle = '#E38F84';
    
	can2.strokeStyle = "#E38F84";
    
	can2.textAlign = 'center';
    
	can2.fillText(end2+'%', cw*.5, ch*.5+2, cw);
    
	can2.beginPath();
    
	can2.arc(35, 35, 30, start, diff2/10+start, false);
    
	can2.stroke(); 
    
    	if(end2 >= 74){
		clearTimeout(sim_2);
	    
	}
	end2++;
	
}

    var sim_3 = setInterval(progressSim3, 50); //timer
function progressSim3(){

	//canvas3
	diff3 = ((end3 / 100) * Math.PI*2*10).toFixed(2);
    
	can3.clearRect(0, 0, cw, ch);
	can3.lineWidth = 10;
    
	can3.fillStyle = '#E38F84';
    
	can3.strokeStyle = "#E38F84";
    
	can3.textAlign = 'center';
    
	can3.fillText(end3+'%', cw*.5, ch*.5+2, cw);
    
	can3.beginPath();
    
	can3.arc(35, 35, 30, start, diff3/10+start, false);
    
	can3.stroke();

    	if(end3 >= 56){
		clearTimeout(sim_3);
	    
	}
	end3++;

}


    var sim_4 = setInterval(progressSim4, 50); //timer
function progressSim4(){
	//canvas4
	diff4 = ((end4 / 100) * Math.PI*2*10).toFixed(2);
    
	can4.clearRect(0, 0, cw, ch);
	can4.lineWidth = 10;
    
	can4.fillStyle = '#E38F84';
    
	can4.strokeStyle = "#E38F84";
    
	can4.textAlign = 'center';
    
	can4.fillText(end4+'%', cw*.5, ch*.5+2, cw);
    
	can4.beginPath();
    
	can4.arc(35, 35, 30, start, diff4/10+start, false);
    
	can4.stroke();
	
	if(end4 >= 24){
		clearTimeout(sim_4);
	    
	}
	end4++;
}
