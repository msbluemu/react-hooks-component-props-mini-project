import React from "react";

function Article({article}){
  const {title, date, preview, minutes} = article;
  const formattedDate = date || "January 1, 1970";

  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBox = Math.ceil(minutes / 10);

  const coffeeCupEmojis = Array(coffeeCups)
  .fill("☕️")
  .map((cup, index) => <span key={index}>{cup}</span>);

  const bentoBoxEmojis = Array(bentoBox)
  .fill("🍱")
  .map((box, index) => <span key={index}>{box}</span>)


    return (
     <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <div>
        {minutes < 30 && <span>{coffeeCupEmojis} {minutes} min read</span>}
        {minutes >= 30 && <span>{bentoBoxEmojis} {minutes} min read</span>}
      </div>
      <p>{preview}</p>
    </article>
  ) 
}

export default Article;