
class KonyvekView {
    #elem
    #szuloelem
    constructor(elem, szuloelem){
       this.#elem = elem;
       this.szuloelem = szuloelem
        let txt = `<div class ="konvtarol"><h1>${elem.cim}<h1><h2>${elem.szerzo}</h2>
        <button class = "elvesz">elvéte</button></div>`;

        szuloelem.append(txt);
       }
       
       }
    


 



export default KonyvekView;