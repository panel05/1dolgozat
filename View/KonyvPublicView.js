import KonyvekView from "../View/KonyvekView.js";

class konyvPublicView{
    constructor(elem, szuloelem){
  
        elem.forEach(elem => {
            const konyvem = new KonyvekView(elem, szuloelem)
            
        });
    }
}
export default konyvPublicView;