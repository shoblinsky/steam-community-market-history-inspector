function handleHover() {
    const hoverMenu = document.querySelector("#iteminfo_clienthover");
    if (!hoverMenu) {
        console.log("There is no #iteminfo_clienthover element in DOM yet. Probably, your window's width less than 1000px. Return. ");
        return;
    }

    const inspectLink = hoverMenu.querySelector("a.btn_small.btn_grey_white_innerfade[href^='steam://']");
    if (!inspectLink) {
        console.log("There is no 'Inspect in game' button element yet. Probably, your window's width less than 1000px. Return. ");
        return;
    }

    const itemName = hoverMenu.querySelector("#hover_item_name");
    console.log(`Here is the inspect link of "${itemName.textContent}": ${inspectLink.href}`);
};

function handleHoverListeners() {
    const rows = (document.querySelectorAll(".market_listing_row.market_recent_listing_row"));

    rows.forEach(row => {
        const gameName = 'Counter-Strike 2';
        /*
        Code of 'active listings' handler.
        const link = row.querySelector("a.market_listing_item_name_link[href*='/730/']")
        ("span.market_listing_item_name_link[href*='/730/']");
        ("div.item_actions.economy_item_popup_only > a.btn_small.btn_grey_white_innerfade[href*='/730/']")
        if (!link) return;
        */
        const game = row.querySelector("span.market_listing_game_name")
        if (game.textContent !== gameName) {
            return;
        }

        const image = row.querySelector(".market_listing_item_img.economy_item_hoverable");
        const name = row.querySelector(".market_listing_item_name.economy_item_hoverable");

        if (image && name) {
            image.addEventListener("mouseenter", handleHover);
            name.addEventListener("mouseenter", handleHover);
        }
    });
};

handleHoverListeners()

