class Editor {

    public clear() {

        

    }

    public getValue() {

        let value:string = "";

        $(".mtk1").get().forEach((e , index) => {

            value += (e.firstChild as any).data + (index + 1 == $(".mtk1").get().length ? "" : "\n")

        })

        return value

    }

} 