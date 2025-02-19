let xmark = document.querySelector('#xmark'),
    sidebar = document.querySelector('.side'),
    cart = document.querySelector('#cart'),
    local = JSON.parse(localStorage.getItem('foods')) || [];

xmark.addEventListener('click', sideDisplay);

function sideDisplay() {
    sidebar.classList.toggle('toggleSide');
}

cart.addEventListener('click', () => { return sideDisplay(); });

let icart = Array.from(document.querySelectorAll('.pic_cont>i')),
    img = Array.from(document.querySelectorAll('.pic_cont>img')),
    content = Array.from(document.querySelectorAll('.pic_cont>p')),
    amount = Array.from(document.querySelectorAll('.pic_cont>span>p')),
    sideul = document.querySelector('.side>ul');

let num = 0, main_total = 0, count = 1, j = 0;

icart.forEach((n, i) => n.addEventListener('click', () => {
    let a = Array.from(document.querySelectorAll('.div2>p')),
        j = i;
    ans = a.find(n => n.textContent == content[i].textContent);
    return ans ? alert('already in cart') : (cartStart(i), str(j));
}));

function cartStart(i) {
    let a = document.createElement('li'),
        div1 = document.createElement('div');
    div1.className = 'div1';
    let main = document.createElement('div');
    main.className = 'side_main';

    let imge = document.createElement('img');
    imge.src = img[i].src;
    div1.append(imge);

    let cont = document.createElement('div');
    cont.className = 'div2';

    let inp = document.createElement('input');
    inp.type = 'number';
    inp.min = 1;
    inp.value = count;
    let rupee = document.createElement('span');
    rupee.textContent = 'Rs.';
    let amt = document.createElement('p');
    amt.textContent = amount[i].textContent;

    rupee.append(amt);

    let fdname = document.createElement('p');
    fdname.textContent = content[i].textContent;

    cont.append(fdname, rupee, inp);

    let div3 = document.createElement('div');
    div3.className = 'div3';
    let spn = document.createElement('span');
    spn.textContent = 'Rs.';

    let total_p = document.createElement('p');
    total_p.textContent = amount[i].textContent;

    let dele = document.createElement('i');
    dele.className = "fa-solid fa-trash-can";

    spn.append(total_p);
    div3.append(spn, dele);
    main.append(div1, cont);
    a.append(main, div3);
    sideul.appendChild(a);

    var car_count = document.getElementById('count');
    num++;
    car_count.innerHTML = num;

    dele.addEventListener('click', () => {
        local = JSON.parse(localStorage.getItem('foods')) || [];
        a.remove();
        num--;
        car_count.innerHTML = num;
        local.forEach((items) => {
            if (items.fdname === fdname.textContent) { local.splice(local.indexOf(items), 1); }
            localStorage.setItem('foods', JSON.stringify(local));
        });
        updatettl();
    });

    let side_rpe = Array.from(document.querySelectorAll('.div2>span>p')),
        side_inp = Array.from(document.querySelectorAll('.div2>input'));

    side_inp.forEach((n, ind) => {
        n.addEventListener('click', () => {
            local = JSON.parse(localStorage.getItem('foods')) || [];
            var side_total = Array.from(document.querySelectorAll('.div3>span>p'));
            let a = Number(side_rpe[ind].textContent) * Number(side_inp[ind].value);
            side_total[ind].innerHTML = a;

            local.forEach(item => {
                if (item.fdname == fdname.textContent) {
                    item.tem_total = a;
                    item.inp = side_inp[ind].value;
                }
            });

            updatettl();
            localStorage.setItem('foods', JSON.stringify(local));
        });
    });

    updatettl();
}

function updatettl() {
    var total = document.querySelector('.order>p>span');
    main_total = Array.from(document.querySelectorAll('.div3>span>p'))
        .reduce((sum, p) => sum + Number(p.textContent), 0);
    total.innerHTML = `Rs.${main_total}`;
}

function str(j) {
    let inp = document.createElement('input');
    inp.min = 1;
    localStorage.setItem('foods', JSON.stringify([...JSON.parse(localStorage.getItem('foods') || '[]'), {
        fdname: content[j].textContent,
        image: img[j].src,
        rupee: amount[j].textContent,
        inp,
        tem_total: amount[j].textContent
    }]));
}

addEventListener('DOMContentLoaded', () => {
    local.forEach((item) => {
        for (let i = 0; i < content.length; i++) {
            if (content[i].textContent == item.fdname) { cartStart(i); }
        }
    });

    let side_inp = Array.from(document.querySelectorAll('.div2>input'));
    var side_total = Array.from(document.querySelectorAll('.div3>span>p'));
    local.forEach((item, i) => {
        side_inp[i].value = item.inp;
        side_total[i].textContent = item.tem_total;
    });

    updatettl();
});
