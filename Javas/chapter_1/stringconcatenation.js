// template string

const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// concatenation way

//let jaw = "The blog called" + " " +title + " " +"by" + " " + author + "has" + likes + "likes";
//console.log(jaw);

// TEMPLATE STRING WAY

let jaw = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(jaw); 


// Creating html templates

let html = `
    <h2>${title}</h2>
    <p> By ${author} </p>
    <span> has ${likes} likes </span>
`;

console.log(html);