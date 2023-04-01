class Editor {

    public getScript() {

        let values:string[];

        values = $(".mtk1").get().map((e) => {

            return ((e.firstChild as any).data).trim()

        })

        return values

    }

} 