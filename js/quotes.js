
const quotes = [
    {
    quote : "프랭크",
    author: " Hi",
    },
    {
    quote : "제니스",
     author: " Hi2",
    },
    {
    quote : "김용기",
     author: " Hi2",
    },   {
        quote : "The way4",
     author: " Hi2",
    },   {
        quote : "The way5",
     author: " Hi2",
    },   {
        quote : "The way6",
     author: " Hi2",
    },   {
        quote : "The way7",
     author: " Hi2",
    },   {
        quote : "The way8",
     author: " Hi2",
    },
    {
        quote : "The way9",
     author: " Hi2",
    },
    {
        quote : "The way10",
     author: " Hi2",
    },
    
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;