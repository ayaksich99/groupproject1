let search = document.getElementById('search');
let searchValue = true;
document.getElementById('button').addEventListener("click", function () {
    let s = document.getElementById('search').value;
    console.log(s);
    if (s.length < 3) {
        return
    }
    document.getElementById('results').innerHTML = "";
    


    let y = document.getElementById('year').value;
    console.log(y);
    let t = document.getElementById('type').value;
    console.log(t);
    fetch(`http://www.omdbapi.com/?apikey=a154b352&s=${s}&y=${y}&type=${t}`)
     
        
        .then(function (response) {
            console.log(response);
            if (!response.ok) {
                console.log(response.status)
            }
            return response.json();
        })
        .then(function (res) {
            appendData(res.Search);
            console.log(res);
        })
    if(results.Response == "False"){
            alert("This page does not exist");
        }
    function appendData(s) {
        for (var i = 0; i < s.length; i++) {
            var div = document.createElement("div");
            let title = document.createElement("h2");
            title.innerText = `Search ${s[i].Title}`;
            div.append(title);
            let y = document.createElement("h3");
            y.innerText = `Year ${s[i].Year}`;
            div.append(y);
            let p = document.createElement("img");
            p.src = s[i].Poster
            div.append(p);
            document.getElementById('results').append(div);

        }
    }

});

