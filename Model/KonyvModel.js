class KonyvModel {
    #konyvekTomb = [];
    constructor() {

    }

    

    getKonyvek(){
        return this.#konyvekTomb;
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                
                this.#konyvekTomb = data.konyv;
                console.log(this.#konyvekTomb)
                
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
    }
}

export default KonyvModel;