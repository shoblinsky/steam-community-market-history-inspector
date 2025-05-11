const activePage = document.querySelector("#BG_bottom");

function handleHover() {
    const hoverMenu = document.querySelector("#iteminfo_clienthover");
    if (!hoverMenu) {
        console.log("There is no #iteminfo_clienthover element in DOM yet. Probably, your window's width less than 1000px. Return. ");
        return;
    };

    const inspectLink = hoverMenu.querySelector("a.btn_small.btn_grey_white_innerfade[href^='steam://']");
    if (!inspectLink) {
        console.log("There is no 'Inspect in game' button element yet. Probably, your window's width less than 1000px. Or you hover case/capsule-item.Return. ");
        return;
    };

    const itemName = hoverMenu.querySelector("#hover_item_name");

    if (itemName) {
        console.log(`Here is the inspect link of "${itemName.textContent}": ${inspectLink.href}`);
        const elem = event.target.closest('.market_listing_row');
        if (elem) {
            createInspectButton(elem, inspectLink.href);
            createInspectButton(inspectLink);
        };
    };
};

function createInspectButton(elem, href) {
    let inspectButton = elem.querySelector(".js-inspect-btn");
    if (!inspectButton) {
        inspectButton = document.createElement('a');
        inspectButton.className = "btn_small btn_grey_white_innerfade js-inspect-btn";
        inspectButton.style.marginLeft = '15px';
        inspectButton.href = href
        inspectButton.textContent = 'Inspect in game';
        const nameCell = elem.querySelector('.market_listing_item_name');
        if (nameCell) {
            nameCell.appendChild(inspectButton);
        }
    }
    return inspectButton;
}


function handleHoverListeners() {
    const rows = (document.querySelectorAll(".market_listing_row.market_recent_listing_row"));
    const gameName = 'Counter-Strike 2';

    rows.forEach(row => {

        const game = row.querySelector("span.market_listing_game_name")
        if (game.textContent !== gameName) {
            return;
        };

        const image = row.querySelector(".market_listing_item_img.economy_item_hoverable");
        const name = row.querySelector(".market_listing_item_name.economy_item_hoverable");

        if (image && name) {
            image.addEventListener("mouseenter", handleHover);
            name.addEventListener("mouseenter", handleHover);
        };
    });
};

if (activePage) {
    handleHoverListeners()
    const observer = new MutationObserver(handleHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
};
