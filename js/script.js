function loadblogpost(){
	var firstArr,lastArr;
	xhr =new XMLHttpRequest();
	xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1',true);
	console.log();
	xhr.onload = function(){
		if (this.status==200) {
			var blogpost = JSON.parse(this.responseText);
			var blogbody = blogpost.body;
			var dataArr = blogbody.split(' ');
			firstArr = dataArr.slice(0,10).join(' ');
			lastArr = dataArr.slice(11,dataArr.length).join(' ');



			console.log(firstArr);
			console.log(lastArr);
			var getElement = document.getElementsByClassName('blogpost');
			//paragraph.innerHTML = firstArr+ " <span >"+lastArr+"</span>";
			getElement[0].innerHTML = firstArr+ " <span class='read-more-target'>"+lastArr+"</span>";
			getElement[1].innerHTML = firstArr+ " <span class='read-more-target'>"+lastArr+"</span>";
		}else{
			document.getElementsByClassName('blogpost').innerHTML = "Not Found Or No Internet Connection"
		}
	}
	xhr.send();
}
//https://stackoverflow.com/questions/19154336/insert-span-in-p-element