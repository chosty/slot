var timers,
	nums,
	stopCount;

document.getElementById('stop0').onclick = function(){
	stopSlot(0);
};
document.getElementById('stop1').onclick = function(){
	stopSlot(1);
};
document.getElementById('stop2').onclick = function(){
	stopSlot(2);
};

function startSlot () {
	timers = [];
	nums = [];
	stopCount = 0;

	runSlot(0);
	runSlot(1);
	runSlot(2);
}

function runSlot (n) {
	document.getElementById('num'+ n).innerHTML = Math.floor((Math.random()*10));
	timers[n] = setTimeout(function(){
		runSlot(n);
	}, 50);
}

function stopSlot (n) {
	//if(nums[n] != undefined){
	if(typeof nums[n] !== 'undefined'){
		return;
	}
	clearTimeout(timers[n]);
	nums[n] = document.getElementById('num'+n).innerHTML;
	stopCount++;

	if(stopCount == 3){
		checkSlot();
	}
}

function checkSlot () {
	//alert("check");
	nums.sort();
	if(nums[0] == nums[1] && nums[0] == nums[2]){
		alert("全部揃った");
	}else if(nums[0] == nums[1] || nums[1] == nums[2]){
		alert("二つ揃った");
	}else{
		alert("残念");
	}
}

startSlot();
