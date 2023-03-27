"use strict";
for (let index = 1; index <= 100; index++) {
    $(`.win-w${index}`).css("width", `${(index / 100) * window.innerWidth}px`);
    $(`.win-h${index}`).css("height", `${(index / 100) * window.innerHeight}px`);
}
