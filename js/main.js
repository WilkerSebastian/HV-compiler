"use strict";
const hvm = new HVM();
$("#run").on("click", () => {
    hvm.run();
});
$("#debug").on("click", () => {
    hvm.run(true);
});
$("#save").on("click", () => {
    hvm.save();
});
