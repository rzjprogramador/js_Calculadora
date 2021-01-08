class CalcController {

  constructor(){
    // Atributos funcionais que vao se repetir
    this.locale = 'pt-BR'

    // DECLARANDO ATRIBUTOS PRIVADOS PARA USAR NO GET E SET ... E ATRIBUINDO SELECIONANDO AOS DESTINOS NO FRONT
   
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")
    this._currentDate
    this.initialize()

  }

  initialize(){
    // METODO ASSIM QUE INICIALIZAR
    // usado metodo data e hora pra iniciar no momento que abre a calculadora
    this.setDisplayDateTime()
    
    // usado o metodo data e hora em setInterval para ficar renovando entre 1segundo e nao travar 
    setInterval(() => {
      this.setDisplayDateTime()
      },1000)


  }
  // METODOS PARA AUXILIAR INICIALIZACAO 
  // Criado metodo para a hora e data definido aqui e reusado no initialize 2 vezes  
  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
      day: '2-digit',
      month: 'long', //short fica abreviado
      year: 'numeric'
    })
      this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
   
  }


  // =====================================================
  //====  METODOS CONSTRUTORES getter e setters ==========

  // GET ::: SÓ LEITURA :: RETORNANDO OS DECLARADOS ATRIBUTOS ... E USANDO METODO DE QUE FORMA VAI ENVIAR AO DESTINO NO FRONT
  // SET ::: SETAR VALOR :: RETORNANDO OS DECLARADOS ATRIBUTOS COM VALORES DE PARAMETROS SOLICITADOS ...E USANDO METODO DE QUE FORMA VAI ENVIAR AO DESTINO NO FRONT

  //displayTime ---------------------------
  get displayTime() {
    return this._timeEl.innerHTML
  }
  set displayTime(value) {
    return this._timeEl.innerHTML = value
  }

  //displayDate ---------------------------
  get displayDate() {
    return this._dateEl.innerHTML
  }
  set displayDate(value) {
    return this._dateEl.innerHTML = value
  }
  
  //displayCalc ---------------------------
  get displayCalc(){
    return this._displayCalcEl.innerHTML
  }

  set displayCalc(value){
    this._displayCalcEl.innerHTML = value
  }


  //currentDate ---------------------------
  get currentDate(){
    return new Date()
  }

  set currentDate(value){
    this._currentDate = value
  }

  


}