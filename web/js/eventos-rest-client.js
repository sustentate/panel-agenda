const eventosRestClient = {
    _URL: "https://sustentatemiddleware-generous-bonobo.mybluemix.net/events",

    getEvents(){
        return axios.get(this._URL).then(response => response.data)
    },

    createEvent(event){
        /* event tiene la forma
        {
          address: null
          contact: null
          description: null
          link: null
          price: null
          promoted: false
          published: false
          startDateTime: null
          title: "Taller introductorio a la Huerta Agroecológica"
          type: null
        }
        */
        return axios.post(this._URL, event)
    },

    updateEvent(event) {
        axios.put(this._URL, event)
    }
}
