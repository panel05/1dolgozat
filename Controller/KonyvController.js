
import KonyvModel from "../Model/KonyvModel.js"
import konyvPublicView from "../View/KonyvPublicView.js";


class KonyvController {
    constructor(){
    const Konyvmodel = new KonyvModel();
    Konyvmodel.adatBe("../konyv.json",this.konyvAdatok)
}
konyvAdatok(elem){
    const szuloElem=$('.fotarol')
    const konyvview = new konyvPublicView(elem,szuloElem)
    console.log(elem)

}



}


export default KonyvController