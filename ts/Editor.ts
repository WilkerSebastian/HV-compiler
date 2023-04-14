class Editor {

    public getScript() {

        let values:string[];

        // @ts-ignore
        values = editorMonaco.getValue().split("\n").map((e) => {

            return e.trim()

        })

        return values

    }

} 