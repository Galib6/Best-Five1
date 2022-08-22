function playerListUpdate(newplayerName) {
    const playerNameFeild = document.getElementById(newplayerName);
    const playerName = playerNameFeild.innerText;
    //  adding to list 
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(playerName));
    ul.appendChild(li);
    i = i + 1;
}