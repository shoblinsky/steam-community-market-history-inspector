function handleHover() {
    const hoverMenu = document.querySelector("#iteminfo_clienthover");
    if (!hoverMenu) {
        console.log("There is no #iteminfo_clienthover element in DOM yet. Return. ");
        return;
    }

    const inspectLink = hoverMenu.querySelector("a.btn_small.btn_grey_white_innerfade[href^='steam://']");
    if (!inspectLink) {
        console.log("There is no 'Inspect in game' button element yet. Return. ");
        return;
    }

    console.log(`Here is the inspect link: ${inspectLink.href}`);
}