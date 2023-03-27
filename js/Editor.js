"use strict";
class Editor {
    clear() {
    }
    getValue() {
        let value = "";
        $(".mtk1").get().forEach((e, index) => {
            value += e.firstChild.data + (index + 1 == $(".mtk1").get().length ? "" : "\n");
        });
        return value;
    }
}
