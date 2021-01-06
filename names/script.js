let toggleNavStatus = false;

let toggleNav = function(){
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarUl = document.querySelector(".nav-sidebar ul");
	let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    
	
	if (toggleNavStatus === false){
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "85%";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "1";
		}	
		toggleNavStatus = true;
	}
	else if (toggleNavStatus === true){
		getSidebar.style.width = "5%";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "0";
		}	
		getSidebarUl.style.visibility = "hidden";
		toggleNavStatus = false;
	}
}

var videoPlayer = document.getElementById("videoPlayer");
var playingVideo = document.getElementById("playingVideo");

function stopVideo(){
	videoPlayer.style.display = "none";
	playingVideo.src = '';
}
			
function playVideo(file){
	playingVideo.src = file;
	videoPlayer.style.display = "block";
}
buildVideoList();

function buildVideoList(){
	let xmlContent = '';
	fetch('../XmlFile.xml').then((response)=> {
		response.text().then((xml)=>{
			xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let videos = xmlDOM.querySelectorAll('videos');
			let i = 0;
			videos.forEach(videoXmlNode => {
				i ++;
				let model = videos[i-1].getAttribute('name');
				if(location.href == "https://yelinked-movies.netlify.app/names/matrix.html"){
					if ( model == "matrix")
					{
						let videodiv = document.createElement("div");
						videodiv.setAttribute('name', 'videos');
						videodiv.setAttribute('id', i+"videos");
						document.getElementById("listnav").appendChild(videodiv);
						let imagediv = document.createElement("div");
							imagediv.setAttribute('name', 'feature-img');
							imagediv.setAttribute('id', i+"feature-img");
							document.getElementById(i+"videos").appendChild(imagediv);
							
						let videoimage = document.createElement("img");
							videoimage.setAttribute('src', videoXmlNode.children[0].innerHTML);
							videoimage.setAttribute('width', '100%');
							document.getElementById(i+"feature-img").appendChild(videoimage);

						let playimage = document.createElement("img");
							playimage.setAttribute('name', 'playbtn');
							playimage.setAttribute('id', 'playbtn');
							playimage.setAttribute('src', '../img/play.png');
							playimage.setAttribute('onclick', "playVideo('"+ videoXmlNode.children[1].innerHTML +"')");
							document.getElementById(i+"feature-img").appendChild(playimage);
							
						let videotitle = document.createElement("p");
							videotitle.setAttribute('name', 'title');
							videotitle.innerText = videoXmlNode.children[2].innerHTML;
							document.getElementById(i+"videos").appendChild(videotitle);	
					}
					else 
					{
						console.log(model);
					}
				}
				else if(location.href == "https://yelinked-movies.netlify.app/names/avengers.html"){
					if ( model == "avengers")
					{
						let videodiv = document.createElement("div");
						videodiv.setAttribute('name', 'videos');
						videodiv.setAttribute('id', i+"videos");
						document.getElementById("listnav").appendChild(videodiv);
						let imagediv = document.createElement("div");
							imagediv.setAttribute('name', 'feature-img');
							imagediv.setAttribute('id', i+"feature-img");
							document.getElementById(i+"videos").appendChild(imagediv);
							
						let videoimage = document.createElement("img");
							videoimage.setAttribute('src', videoXmlNode.children[0].innerHTML);
							videoimage.setAttribute('width', '100%');
							document.getElementById(i+"feature-img").appendChild(videoimage);

						let playimage = document.createElement("img");
							playimage.setAttribute('name', 'playbtn');
							playimage.setAttribute('id', 'playbtn');
							playimage.setAttribute('src', '../img/play.png');
							playimage.setAttribute('onclick', "playVideo('"+ videoXmlNode.children[1].innerHTML +"')");
							document.getElementById(i+"feature-img").appendChild(playimage);
							
						let videotitle = document.createElement("p");
							videotitle.setAttribute('name', 'title');
							videotitle.innerText = videoXmlNode.children[2].innerHTML;
							document.getElementById(i+"videos").appendChild(videotitle);	
					}
					else 
					{
						console.log(model);
					}
				}
				else if(location.href == "https://yelinked-movies.netlify.app/names/johnwick.html"){
					if ( model == "johnwick")
					{
						let videodiv = document.createElement("div");
						videodiv.setAttribute('name', 'videos');
						videodiv.setAttribute('id', i+"videos");
						document.getElementById("listnav").appendChild(videodiv);
						let imagediv = document.createElement("div");
							imagediv.setAttribute('name', 'feature-img');
							imagediv.setAttribute('id', i+"feature-img");
							document.getElementById(i+"videos").appendChild(imagediv);
							
						let videoimage = document.createElement("img");
							videoimage.setAttribute('src', videoXmlNode.children[0].innerHTML);
							videoimage.setAttribute('width', '100%');
							document.getElementById(i+"feature-img").appendChild(videoimage);

						let playimage = document.createElement("img");
							playimage.setAttribute('name', 'playbtn');
							playimage.setAttribute('id', 'playbtn');
							playimage.setAttribute('src', '../img/play.png');
							playimage.setAttribute('onclick', "playVideo('"+ videoXmlNode.children[1].innerHTML +"')");
							document.getElementById(i+"feature-img").appendChild(playimage);
							
						let videotitle = document.createElement("p");
							videotitle.setAttribute('name', 'title');
							videotitle.innerText = videoXmlNode.children[2].innerHTML;
							document.getElementById(i+"videos").appendChild(videotitle);	
					}
					else 
					{
						console.log(model);
					}
				}
				else
				{
					console.log(location.href);
				}
			});
		});              
	});   
}
