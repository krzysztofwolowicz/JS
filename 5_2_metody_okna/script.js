window.addEventListener('load',function(){
	
	var bopen = document.getElementById('open');
	var bprint = document.getElementById('print');
	var bprompt = document.getElementById('prompt');
	var bconf = document.getElementById('confirm');
	
	bopen.addEventListener('click',function(){
		window.open('http://strefakursow.pl');
		})
		
	bprint.addEventListener('click',function(){
		window.print(); 
	})
	
	bprompt.addEventListener('click',function(){
		window.prompt('Wprowadź wartość');
		})
		
	bconf.addEventListener('click',function(){
		window.confirm('Czy na pewno zamknąć okno?');
		})
	
})
