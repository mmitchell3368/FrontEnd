/*
	Name: Group 2 (Benjamin Ward, Michael Mitchell, Braden Smith)
	File Name: scripts.js
	Date: 6/19/23
*/


//Global variables
var form = document.getElementById('form');
var boilLoss = .5;
var grainAbsorb = 1;
var hobAbsorb = .07;
var trubLoss = .5;

function calculate () {
form.addEventListener('submit', function(event){
	event.preventDefault() // prevents the form from autocompleting
	
	//Variables
	var gallonsEnd = parseFloat(document.getElementById('gallonsEnd').value);
	var grainWeight = parseFloat(document.getElementById('grainWeight').value);
	var hopsWeight = parseFloat(document.getElementById('hopsWeight').value);
	var boilTime = parseFloat(document.getElementById('boilTime').value);
	var grainTemp = parseFloat(document.getElementById('grainTemp').value);
	var mashTemp = parseFloat(document.getElementById('mashTemp').value);
	var kettleSize = parseFloat(document.getElementById('kettleSize').value);
	
	var gallonsNeeded = gallonsEnd + boilLoss + grainAbsorb + trubLoss;
	var strikeTemp =  ((.2/((gallonsNeeded*4)/grainWeight))*(mashTemp-grainTemp))+ mashTemp;
	
	document.getElementById("result").innerHTML = "Gallons of water needed: " + gallonsNeeded.toFixed(2)+ "<br>Strike temperature: " + strikeTemp.toFixed(0) +" &#8457"; 
	}	
)
}