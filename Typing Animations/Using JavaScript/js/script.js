class TypeWriter{
    constructor(txtElement,words,wait=3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.isDeleting = false;
    }
    type(){
        const current = this.wordIndex;
        const fullTxt = this.words[current];
        if(this.isDeleting){
            this.txt = fullTxt.substring(0,this.txt.length - 1);
        }else{
            this.txt = fullTxt.substring(0,this.txt.length + 1);
        }
        this.txtElement.innerHTML = `${this.txt}`;
        let typeSpeed = 200;
        if(this.isDeleting){
            typeSpeed /= 2;
        }
        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait;
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }
        if(this.wordIndex === this.words.length){
            this.wordIndex = 0;
        }
        setTimeout(()=>this.type(),typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const txtElement = document.querySelector('#typed');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement,words,wait).type();
})