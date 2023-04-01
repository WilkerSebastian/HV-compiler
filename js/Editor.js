"use strict";
class Editor {
    getScript() {
        let values;
        values = $(".mtk1").get().map((e) => {
            return (e.firstChild.data).trim();
        });
        return values;
    }
}
