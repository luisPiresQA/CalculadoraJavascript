class CalcController{

    constructor(){

        let _displayCalEl = document.querySelector("#display")
        let _dateEl =  document.querySelector("#data")
         let _timeEl = document.querySelector("#hora")
        this._displayCalc = "0"
        this._currentDate
        this.initialize()
    }

    initialize(){
        displayCalEl.innerHTML = "4567"
        dateEl.innerHTML = new Date().toLocaleDateString('pt-BR')
        timeEl.innerHTML = "00:00"
    }

    get displaycalc(){

        return this._displayCalc
    }

    set displaycalc(valor){
        this._displayCalc = valor
    }

    get currentDate(){

       return this._currentDate
    }

    set currentDate(valor ){
        this._currentDate=valor
    }
}