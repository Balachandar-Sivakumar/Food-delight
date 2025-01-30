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
  let  num = 0,
      main_total = 0;      
      
  let count = 1;
  icart.forEach((n,i)=>{
      n.addEventListener('click',()=>{
          
          if(check()){ return alert('Your item is already in cart')}
  
          let a = document.createElement('li'),
              div1 = document.createElement('div');
              div1.className='div1'
          let main = document.createElement('div')
              main.className = 'side_main'       
  
              div1.append(img[i].cloneNode(true))
  
          let cont = document.createElement('div');
              cont.className='div2'
                 
          let inp = document.createElement('input');
              inp.type='number';
              inp.min=1;
              inp.value=count;
          let rupee = Array.from(document.querySelectorAll('.pic_cont>span'))
  
              cont.append(content[i].cloneNode(true),rupee[i].cloneNode(true),inp)
  
        let div3 = document.createElement('div');
              div3.className='div3';
        let   total_p= document.createElement('p') ;          
              total_p.textContent=`${amount[i].textContent}`;
        let dele = document.createElement('i');
              dele.className="fa-solid fa-trash-can";
  
          div3.append(total_p,dele);
  
          main.append(div1,cont)
  
          a.append(main,div3);
  
          sideul.appendChild(a)
      
          let car_count = document.getElementById('count');
           
              num++
              car_count.innerHTML=num
               
              dele.addEventListener('click', ()=>{
                  a.remove()
                  num--
                  car_count.innerHTML=num;
                  main_total-=Number(total_p.textContent)
                  total.innerHTML=`Rs.${main_total}`;
                   
              })
          
          function check(){
  
              let car_cont= Array.from( document.querySelectorAll('.div2>p'));
              let a =car_cont.find(n=>{ return n.textContent===content[i].textContent ? true : false})
             return a;
             
          } 
          
          let side_rpe = Array.from(document.querySelectorAll('.div2>span>p')),
               side_inp = Array.from(document.querySelectorAll('.div2>input')),
              
              total = document.querySelector('.order>p>span');
              
              
              side_inp.forEach((n,i)=>{
                  n.addEventListener('click',()=>{
                        main_total=0;
                      let  side_total = Array.from(document.querySelectorAll('.div3>p'));
                      let a = Number(side_rpe[i].textContent)*Number(side_inp[i].value);
                      side_total[i].innerHTML=a;
                                
                      for(let i=0;i<side_total.length;i++) {main_total+=Number(side_total[i].textContent)}
                                            
                      total.innerHTML=`Rs.${main_total}`;
                  })
              })
  
              main_total+=Number(amount[i].textContent);
              total.innerHTML=`Rs.${main_total}`;
  
      })
  });
  
  
  
  
  
  