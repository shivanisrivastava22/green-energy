const ctrlBtns = document.querySelectorAll('.bg');

const container = document.querySelector('.tab-box');

let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let containerValue = [
    {
        headingContent: "Plantation",
        bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "./img/first.jpg",
	alt: "1"
    },
    {
        headingContent: "Green-House",
        bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "./img/second.jpg",
	imgAlt: "2"
    },
    {
        headingContent: "Bio-diversity",
        bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "./img/third.jpg",
	imgAlt: "3"
    }
];

function preloader() {
     const imagesPaths = [
        "./img/first.jpg",
        "./img/second.jpg",
        "./img/third.jpg"
     ];

     for (let i = 0; i < imagesPaths.length; i++) {
        ctrlBtns[i].style.backgroundImage = "url("+imagesPaths[i]+")";
     }

     ctrlBtns[0].id="active";

     container.innerHTML = `
        <div class="head"><h2>${containerValue[0].headingContent}</h2></div>
        <div class="image">
            <img src="${containerValue[0].imgUrl}" alt="${containerValue[0].imgAlt}">
        </div>
        <div class="para">
            <p>${containerValue[0].bodyText}</p>
        </div>`;

     // Images ready to be used:
     console.log(`Preloaded images:\n\t${containerValue[0].imgUrl}\n\t${containerValue[1].imgUrl}\n\t${containerValue[2].imgUrl}`);
};
  
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
 function  clickBtn(ev) {
    
    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton); 

        // remove currently present id="active"
        for (let i = 0; i<ctrlBtns.length; i++){
            // claiming that current element in the loop containe attribute
            if(ctrlBtns[i].id){
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                ctrlBtns[i].removeAttribute('id');
            }  
        }

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    container.innerHTML = `
        <div class="head"><h2>${containerValue[index].headingContent}</h2></div>
        <div class="image">
            <img src="${containerValue[index].imgUrl}" alt="${containerValue[index].imgAlt}">
        </div>
        <div class="para">
            <p>${containerValue[index].bodyText}</p>
        </div>`;
}
// register your buttons for click event
for(let i = 0; i<ctrlBtns.length; i++){ 
    ctrlBtns[i].addEventListener('click', clickBtn);  
}

window.addEventListener("load", preloader);

