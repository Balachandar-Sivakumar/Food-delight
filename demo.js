let xmark = document.querySelector('#xmark'),
    sidebar = document.querySelector('.side'),
    cart = document.querySelector('#cart');


xmark.addEventListener('click', sideDisplay)

function sideDisplay(){
    sidebar.classList.toggle('toggleSide');
}
 
cart.addEventListener('click',()=>{return sideDisplay()})

let icart =Array.from( document.querySelectorAll('.pic_cont>i')),
    img   =Array.from( document.querySelectorAll('.pic_cont>img')),
    content =Array.from( document.querySelectorAll('.pic_cont>p')),
    amount =Array.from( document.querySelectorAll('.pic_cont>span>p')),
    sideul = document.querySelector('.side>ul');
let car_cout=    
    console.log(amount);
    
let count = 1;
icart.forEach((n,i)=>{
    n.addEventListener('click',()=>{
        
        let a = document.createElement('li'),
            div1 = document.createElement('div');
            div1.className='div1'
            

            div1.append(img[i].cloneNode(true))

        let cont = document.createElement('div');
            cont.className='div2'
               
        let inp = document.createElement('input');
            inp.type='number';
            inp.value=count;
        let rupee = Array.from(document.querySelectorAll('.pic_cont>span'))

            cont.append(content[i].cloneNode(true),rupee[i].cloneNode(true),inp)

        let div3 = document.createElement('div');
            div3.className='div3'
            total_p= document.createElement('p')            
            total_p.textContent=`Rs.${amount[i].textContent}`;
        let dele = document.createElement('i');
            dele.className="fa-solid fa-trash-can";

            dele.addEventListener('click', ()=>{
                a.remove()
            })

          

        div3.append(total_p,dele);

        a.append(div1,cont,div3);

        sideul.appendChild(a)
    
         
            
    })
})


