// main Variable
let getInpute = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let showData = document.querySelector(".show-data");

getButton.onclick = function() {

    getRepos();

}


//get Repos Function
function getRepos() {

    if(getInpute.value == "") { //if value is Empty

        showData.innerHTML ="<span>Please Write Github Username.<span/>"
    }

    else {

            fetch(`https://api.github.com/users/${getInpute.value}/repos`)
            .then((repos) => repos.json())
                
            .then((dataRepos) => {

                showData.innerHTML= "";
                if ( dataRepos.message =="Not Found" ){ 
                    showData.innerHTML= "username not found"
                    }
                    else {
                    dataRepos.forEach(repo => { 
                        // creat repo name...
                        let mainDiv = document.createElement("div");
                        mainDiv.className ="repoDataBox";
                        let repoName =document.createTextNode(repo.name);
                        mainDiv.appendChild(repoName);
                        //creat repo URL ..
                        let linkUrl = document.createElement("a");
                        let repoUrl = document.createTextNode(`Visit`);
                        linkUrl.setAttribute("target", "_blank");
                        linkUrl.href = `https://github.com/${getInpute.value}/${repo.name}`;
                        linkUrl.appendChild (repoUrl);
                        mainDiv.appendChild(linkUrl);
                        // creat starcount repo...
                        let spanStar = document.createElement("span")
                        let spanStarIcon = document.createElement("i");
                        let repoStar = document.createTextNode(` star: ${repo.stargazers_count}`)
                        spanStarIcon.className = "fa-solid fa-star";
                        spanStar.appendChild(spanStarIcon);
                        spanStar.appendChild(repoStar);
                        mainDiv.appendChild(spanStar);
                        
                        // Add Data to Cantainer 
                        
                        showData.appendChild(mainDiv);
                        

                })} 
            })
            
        }
        }
        // <i class="fa-solid fa-star"></i>