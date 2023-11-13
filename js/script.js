let count = document.querySelectorAll('.count');

count.forEach( item => {
    let number = item.dataset.number;
    item.textContent = 0;

    const updatNoumber = () => {
        let tar = number / 70;
        let c = +item.textContent;
        if( c < number ) {
            item.textContent = Math.ceil(c + tar)
            setTimeout(updatNoumber, 50)
        }else {
            item.textContent = number
        }

    }
    
    updatNoumber()



    
})