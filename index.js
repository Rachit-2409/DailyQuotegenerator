let quote = document.getElementById('Quote');
let author = document.getElementById('Author');
let q = document.getElementById('q');
let t = document.getElementById('t');



const url = "https://api.quotable.io/quotes/random";
 async function fetch_URL(){
    let data = await fetch(url);
    let response = await data.json();
    console.log(response)

    quote.innerText = response[0].content;
    author.innerText = `--${response[0].author}`;
}

fetch_URL();

function tweet(){
    window.open("https://twitter.com/intent/post?text=" + quote.innerText + " ---" + author.innerText,  "Twwet window", "height:300px", "width:300px")
}

t.addEventListener('click',tweet)
q.addEventListener('click', fetch_URL);