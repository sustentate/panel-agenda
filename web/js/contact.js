class Contact{
    constructor(id, name, email, lastName ){
        this.id = id
        this.name = name
        this.email = email
        this.lastName = lastName
    }

    get name(){return this.name}

    get email(){return this.email}

    get lastName(){return this.lastName}
    toJson = function (){
        return ("{" +
            "\"id\":\"" + this.id + "\"," +
            "\"name\":\"" + this.name + "\"," +
            "\"email\":\"" + this.email + "\"," +
            "\"lastName\":" + this.lastName +
        "}");
    }
    
}