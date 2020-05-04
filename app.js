class App {
  constructor() {
    this.keys1 = ['(', ')', '%', 'AC'];
    this.keys2 = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '='];
    this.keys3 = ['/', '*', '-', '+'];

    this.displayEl = document.querySelector('.display');
    this.keysEl1 = document.querySelector('.keys1');
    this.keysEl2 = document.querySelector('.keys2');
    this.keysEl3 = document.querySelector('.keys3');

    this.countEquals = 0;

    this.renderkeyboard();
    this.eventHandlers();
  }

  eventHandlers() {
    let keys = document.querySelectorAll('.keyboard li');
    keys.forEach(key => key.onclick = () => {
      this.renderDisplay(key);

      if (key.innerText === 'AC') {
        this.displayEl.innerHTML = '';
        this.displayEl.style.fontSize = '3.2em';
      }

      if (key.innerText === '=') {
        this.countEquals = 1;
        if (this.displayEl.innerText.length === 0) {
          return;
        } else {
          this.calc();
        }
      }
    });
  }

  renderkeyboard() {
    this.keys1.forEach(key => {
      let keyEl = document.createElement('li');
      keyEl.appendChild(document.createTextNode(key));

      this.keysEl1.appendChild(keyEl);
    });

    this.keys2.forEach(key => {
      let keyEl = document.createElement('li');
      keyEl.appendChild(document.createTextNode(key));

      this.keysEl2.appendChild(keyEl);
    });

    this.keys3.forEach(key => {
      let keyEl = document.createElement('li');
      keyEl.appendChild(document.createTextNode(key));

      this.keysEl3.appendChild(keyEl);
    });
  }

  renderDisplay(key) {
    if (key.innerText !== '=') {
      if (this.keys2.includes(key.innerText) && this.countEquals === 1) {
        this.displayEl.innerHTML = '';
        this.countEquals = 0;
      }

      if (this.keys3.indexOf(key.innerText) > -1) {
        this.countEquals = 0;
        this.displayEl.append(` ${key.innerText} `);
      } else {
        this.displayEl.append(key.innerText);
      }
    }

    if (this.displayEl.innerText.length > 17) {
      this.displayEl.style.fontSize = '2.4em';
    }
  }

  calc() {
    let result = this.displayEl.innerText;
    this.displayEl.innerHTML = eval(result)
  }

}

new App();