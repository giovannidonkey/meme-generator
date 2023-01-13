const form = document.querySelector('#meme-form');
let img = document.querySelector('#meme-img');
let text = document.querySelector('#meme-text');
let text1 =document.querySelector('#meme-text-bottom');

form.addEventListener('submit',function(e){
    e.preventDefault();
    addMeme();
    form.reset();
});



function addMeme(){

    const nDiv = document.createElement('div');
    nDiv.classList.add('meme');
    let t = document.createElement('span');
    t.classList.add('top');
    t.innerText = text.value;

    let t2 = document.createElement('span');
    t2.classList.add('bottom');
    t2.innerText = text1.value;
    
    const nImg = document.createElement('img');
    nImg.src = img.value;
    nImg.width = 500;
    nImg.height = 250;

    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'X';

    rmvBtn.addEventListener('click',function(e){
        e.target.parentNode.remove();
     });

    document.body.append(nDiv);
    nDiv.appendChild(nImg);
    nDiv.appendChild(t);
    nDiv.appendChild(t2);
    nDiv.appendChild(rmvBtn);
   
    
    console.log(nDiv);
}