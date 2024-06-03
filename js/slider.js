(function(){
    const sliders = [...document.querySelectorAll('.nosotros__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add)=> {
        const currentNosotros = document.querySelector('.nosotros__body--show').dataset.id;
        value = Number(currentNosotros);
        value += add;

        sliders[Number(currentNosotros)-1].classList.remove('nosotros__body--show');
        if (value === sliders.length+1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('nosotros__body--show');
    }

})();