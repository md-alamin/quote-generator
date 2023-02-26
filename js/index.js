const card = document.getElementById("card");

const loadQuote = async () => {
    const URL = "https://api.adviceslip.com/advice";
    const res = await fetch(URL);
    const data = await res.json();
    showData(data.slip);
};

const showData = (quote) => {
    console.log(quote);
    // card.innerHTML = `
    // <div class="card-body">
    //                     <h4 class="card-title text-success bold">Advice #${quote.id}</h4>
    //                     <h2 class="card-text px-md-1">
    //                         ${quote.advice}
    //                     </h2>
    //                     <hr class="text-white pt-3" />
    //                     <div
    //                         class="position-absolute top-100 start-50 translate-middle"
    //                         style="cursor: pointer"
    //                         id="dice"
    //                     >
    //                         <i
    //                             class="fa-solid fa-dice-six fa-2x p-3 bg-success rounded-circle"
    //                         ></i>
    //                     </div>
    //                 </div>
    // `;
    // document.getElementById("dice").addEventListener("click", function () {
    //     loadQuote();
    // });
};

loadQuote();
