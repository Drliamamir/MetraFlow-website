const wrapper = document.getElementById("tiles");
const login = document.getElementById("login");
let columns = Math.floor(login.clientWidth / 50),
    rows = Math.floor(login.clientHeight / 50);

const colors = [
    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(244, 81, 30)",
    "rgb(76, 175, 80)",
    "rgb(33, 150, 243)",
    "rgb(156, 39, 176)"
];

//let count = -1;
let toggled = false;

const handleOnClick = (index) => {
    //count = count + 1;
    toggled = !toggled;

    //document.body.classList.toggle("toggled");

    anime({
        targets: ".tile",
        //backgroundColor: colors[count % (colors.length - 1)],
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    });
};

const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = (e) => handleOnClick(index);
    return tile;
};

const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
};

const createGrid = () => {
    wrapper.innerHTML = "";
    columns = Math.floor(login.clientWidth / 75);
    rows = Math.floor(login.clientHeight / 75);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
};

createGrid();
window.onresize = () => createGrid();