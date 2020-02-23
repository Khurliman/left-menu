class CLICK {
    constructor(element) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if(element instanceof HTMLElement) {
            this.el = element;
        }

        this.el.addEventListener('click', () => this.leftMenuOpen());
    }
    leftMenuOpen() {
        const left = document.querySelector('.left_menu'),
              leftBtn = document.querySelector('.left_btn'),
              menu = document.querySelector('.menu');

        left.style.display = 'flex';
        leftBtn.style.paddingRight = '20px';
        leftBtn.style.paddingTop = '30px';

        this.el.addEventListener('click', () => this.leftMenuClose());
    }
    leftMenuClose() {
        const left = document.querySelector('.left_menu'),
        leftBtn = document.querySelector('.left_btn'),
        menu = document.querySelector('.menu');

        left.style.display = 'none';
        leftBtn.style.paddingTop = '30px';
        leftBtn.style.paddingRight = '15px';

        this.el.addEventListener('click', () => this.leftMenuOpen());
    }
}

const click = new CLICK('.left_btn');