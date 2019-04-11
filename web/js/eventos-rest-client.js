const eventosRestClient = {

    _proxyurl : "https://cors-anywhere.herokuapp.com/",
    _URL: "https://sustentatemiddleware-generous-bonobo.mybluemix.net/events",
    
    getEvents(){
        return axios.get(this._proxyurl + this._URL).then(response => response.data)
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
        return axios.post(this._proxyurl + this._URL, JSON.stringify(event), { headers: { 'Content-Type': 'application/json' } })
    },

    updateEvent(event) {
        axios.put(this._URL, event)
    },
    makeEvent(jsonEvent){
        return new Event (jsonEvent.id, jsonEvent._rev, jsonEvent.title, jsonEvent.description, jsonEvent.link, jsonEvent.published,
            jsonEvent.promoted, jsonEvent.address, jsonEvent.price, jsonEvent.startDate, jsonEvent.contact,jsonEvent.image);
    },
    eventsList(jsonEventList) {
        return jsonEventList.map(jsonEvent => this.makeEvent(jsonEvent))
        
    },
    async exportListEvent(){
        try{
            const jsonEvents = await this.getEvents();
            return  this.eventsList(jsonEvents);
        }catch(err){
            console.log(err)
        }
    }
}



