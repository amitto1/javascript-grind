const orderBtn = document.getElementById("order-btn");
const burnerContainer = document.getElementById("burners-container");

const queContainer = document.getElementById("queue-container");
const logBox = document.getElementById("log-box");

let tacoCount = 0;

function logToScreen(msg) {
    logBox.innerHTML += `<div>${msg}</div>`;
    logBox.scrollTop = logBox.scrollHeight;
}

function createTacoTruck(maxBurners) {
    let ticketQueue = [];
    let activeCooks = 0;
    function updateUI() {
        queContainer.innerHTML = '';
        burnerContainer.innerHTML = '';
        for (let item of ticketQueue) {
            queContainer.innerHTML += `<div class="taco-card waiting">📋 Ticket #${item.id}</div>`;
        }

        for (let i = 0; i < activeCooks; i++) {
            burnerContainer.innerHTML += `<div class="taco-card cooking">🔥 Cooking Taco...</div>`;
        }
    }

    function processQueue() {
        updateUI();
        if (activeCooks >= maxBurners || ticketQueue.length === 0) {
            return;
        }

        // This removes the first ticket from the array and saves it into 'nextOrder'
        const nextOrder = ticketQueue.shift();
        // This pulls those 4 specific keys out of the nextOrder box so we can use them as normal variables
        const { id, tacoCookingFn, resolve, reject } = nextOrder;
        activeCooks++;
        tacoCookingFn()
            .then(() => {
                logToScreen("Its Ready!");
                resolve();
            })
            .finally(() => {
                activeCooks--;
                processQueue();
            })

    }

    return function (id, tacoCookingFn) {
        return new Promise((resolve, reject) => {
            const obj = { id, tacoCookingFn, resolve, reject }
            ticketQueue.push(obj);
            logToScreen(`Ticket queued for Taco #${id}`);
            processQueue();
        })
    }
}

// 1. Initialize our factory. We pass 2 as the maxBurners!
const orderFromTruck = createTacoTruck(2);

// 2. A fake cooking action function that simulates a 2.5-second cook time
const cookTacoAction = () => {
    return () => new Promise(res => setTimeout(res, 2500));
};

// 3. Listen for clicks on our orange button!
orderBtn.addEventListener('click', () => {
    tacoCount++; // Count the new order

    // Fire the order into our closure engine!
    orderFromTruck(tacoCount, cookTacoAction);
});
