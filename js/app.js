const card = document.getElementById("card");

const loadQuote = async () => {
    toggleLoader(true);
    const URL = "https://api.adviceslip.com/advice";
    const res = await fetch(URL);
    const data = await res.json();
    setTimeout(() => {
        showData(data.slip.advice, data.slip.id);
    }, 300);
};

const showData = (advice, id) => {
    console.log(advice);
    card.innerHTML = ``;
    card.innerHTML = `
    <div class="card-body">
                        <h4 class="card-title text-success bold">Advice #${id}</h4>
                        <h2 class="card-text px-md-1">
                            ${advice}
                        </h2>
                        <hr class="text-white pt-3" />
                        <div
                            class="position-absolute top-100 start-50 translate-middle"
                            style="cursor: pointer"
                            id="dice"
                        >
                            <i
                            id = "dice-in"
                                class="fa-solid fa-dice-six fa-2x p-3 bg-success rounded-circle"
                            ></i>
                        </div>
                    </div>
    `;
    toggleLoader(false);
    document.getElementById("dice").addEventListener("click", function () {
        loadQuote();
    });
};

const searchQuote = async (word) => {
    toggleLoader(true);
    const URL = `https://api.adviceslip.com/advice/search/${word}`;
    const res = await fetch(URL);
    const data = await res.json();
    showSearchData(
        data.slips != undefined ? data.slips[0].advice : "No data found",
        data.slips != undefined ? data.slips[0].id : "00"
    );
};

const showSearchData = (advice, id) => {
    card.innerHTML = ``;
    card.innerHTML = `
    <div class="card-body">
                        <h4 class="card-title text-success bold">Advice #${id}</h4>
                        <h2 class="card-text px-md-1">
                            ${advice}
                        </h2>
                        <hr class="text-white pt-3" />
                        <div
                            class="position-absolute top-100 start-50 translate-middle"
                            style="cursor: pointer"
                            id="dice"
                        >
                            <i
                            id = "dice-in"
                                class="fa-solid fa-dice-six fa-2x p-3 bg-success rounded-circle"
                            ></i>
                        </div>
                    </div>
    `;
    // stop loader
    toggleLoader(false);
    document.getElementById("dice").addEventListener("click", function () {
        loadQuote();
        // start loader
    });
};

const toggleLoader = (isLoading) => {
    const loader = document.getElementById("loader");
    const cardContainer = document.getElementById("card-container");
    if (isLoading) {
        loader.classList.remove("d-none");
        cardContainer.classList.add("d-none");
    } else {
        loader.classList.add("d-none");
        cardContainer.classList.remove("d-none");
    }
};

document
    .getElementById("search-input")
    .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const searchInput = document.getElementById("search-input").value;
            searchQuote(searchInput);
        }
    });

document.getElementById("search-btn").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value;
    searchQuote(searchInput);
});

loadQuote();
