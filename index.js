let quote = document.getElementsByTagName("h1")[0];
let author = document.getElementsByTagName("h2")[0];

async function getrandomQuotation(){
 const url = "https://type.fit/api/quotes";
  const response = await fetch(url);
  const allquotes=response.json();
   let ind = randomNumber();
 // console.log("hello world")
  allquotes.then(data=>{
  quote.innerHTML=data[ind].text;
  author.innerHTML=data[ind].author;
});

}
function randomNumber(){
    return Math.floor(Math.random()*1643);
}