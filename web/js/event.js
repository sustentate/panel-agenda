class Event {
    constructor(_id, _rev, title, description, link, published,
                 promoted, address, price, startDate, contact) {
      this.title = title
      this.description = description
      this.link = link
      this.contact = new Contact(contact.name, contact.email, contact.lastName)
     // this.urlImage = urlImage
      this._id = _id
      this._rev = _rev
      this.published = published
      this.promoted = promoted
      this.address = address
      this.price = price
      this.startDate = startDate
    }

    get title(){ return this.title}
    
    get description(){return this.description}

    get link(){return this.link}

    get _id(){return this._id}

    get _rev(){return this._rev}

    get published(){return this.published}

    get price(){return this.price}

    get promoted(){return this.promoted}



 //   get urlImage(){return this.urlImage}

    set title(title){this.title = title}

    set description(description){this.description = description}

    set link(link){this.link = link}

  //  set urlImage(urlImage){this.urlImage = urlImage}

    toJson = function (){
        return ("{" +
            "\"title\":\"" + this.title + "\"," +
            "\"description\":\"" + this.description + "\"," +
            "\"url\":\"" + this.url + "\"," +
            "\"urlImage\":" + this.urlImage +
        "}")
    }

    
}