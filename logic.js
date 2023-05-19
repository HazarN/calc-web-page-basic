// Calculator will be implemented based on this four states.
const State = {
    S0: 0, 
    S1: 1,
    S2: 2,
    S3: 3,
};

// Keypad html element
const buttons = document.querySelectorAll('.keypad-container button');

// Screen html elements => result: result screen, memory: memory screen
const result = document.querySelector('#result');
const memory = document.querySelector('#memory');

result.innerHTML = '0';                                                    // Initial screen displays zero(0)

// Button tracing with state transition
let nextState = State.S0;                                                  // Initial state is S0                                                      
buttons.forEach(button => {                                                  

    button.addEventListener('click', (event) => {
        nextState = clickHandler(event, nextState)                         // State transition with click event
    });
});                                            

// Button interrupt handler, also returns the next state information
function clickHandler(event, state) {
    const button      = event.target;
    const buttonValue = button.textContent;

    switch (state) {
        case State.S0:
            console.log('State: S0');

            if (button.classList.contains('clear')) {
                result.innerHTML = '0';
                memory.innerHTML = '';

                state = State.S0;
            } else if (button.classList.contains('number')) {
                result.innerHTML = '';
                result.innerHTML = buttonValue;

                state = State.S1;
            } else if (button.classList.contains('operator')) {
                memory.innerHTML = result.innerHTML + buttonValue;
                
                console.log(buttonValue);

                state = State.S2;
            }

            return state;
        case State.S1:
            console.log('State: S1');

            if (button.classList.contains('clear')) {
                result.innerHTML = '0';
                memory.innerHTML = '';

                state = State.S0;
            } else if (button.classList.contains('number')) {
                result.innerHTML += buttonValue;

                state = State.S1;
            } else if (button.classList.contains('operator')) {
                memory.innerHTML = result.innerHTML + buttonValue;
                
                console.log(buttonValue);

                state = State.S2;
            }

            return state;
        case State.S2:
            console.log('State: S2');

            if (button.classList.contains('clear')) {
                result.innerHTML = '0';
                memory.innerHTML = '';

                state = State.S0;
            } else if (button.classList.contains('number')) {
                result.innerHTML = '';
                result.innerHTML = buttonValue;

                state = State.S3;
            }

            return state;
        case State.S3:
            console.log('State: S3');

            if (button.classList.contains('clear')) {
                result.innerHTML = '0';
                memory.innerHTML = '';

                state = State.S0;
            } else if (button.classList.contains('number')) {
                result.innerHTML += buttonValue;

                state = State.S3;
            } else if (button.classList.contains('operator')) {
                state = State.S2;
            } else if (button.classList.contains('equals')) {

                calc = eval(memory.innerHTML + result.innerHTML);
                
                if (calc == Infinity) {
                    calc = 'Error';
                }

                result.innerHTML = calc.toPrecision(5);

                state = State.S0;
            }

            return state;
    }
}