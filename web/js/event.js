class Event {
    constructor(id, _rev, title, description, link, published,
                 promoted, address, price, startDate, contact, urlImage) {
      this.title = title
      this.description = description
      this.link = link
      this.contact = contact ? new Contact(contact.name, contact.email, contact.lastName) : null
      this.urlImage = urlImage
      this.id = id
      this._rev = _rev
      this.published = published
      this.promoted = promoted
      this.address = address
      this.price = price
      this.startDate = startDate
    }

   
 
    toJson = function (){
        return ("{" +
            "\"id\":\"" + this.id + "\"," +
            "\"_rev\":\"" + this._rev + "\"," +
            "\"title\":\"" + this.title + "\"," +
            "\"description\":\"" + this.description + "\"," +
            "\"link\":\"" + this.link + "\"," +
            "\"published\":\"" + this.published + "\"," +
            "\"promoted\":\"" + this.promoted + "\"," +
            "\"address\":\"" + this.address + "\"," +
            "\"price\":\"" + this.price + "\"," +
            "\"startDate\":\"" + this.startDate + "\"," +
            "\"contact\":" + this.contact.toJson +
        "}")
    }

    
};