// const Cart = require('./cart/')
const db = require('../util/database')
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save () {
    db.execute('Insert into products (title,price,imageUrl,descrption) values (?,?,?,?)',
    [this.title,this.price,this.imageUrl, this.descrption]
    )
  }

  staticdeleteById(id) {

  }
  static fetchAll() {
    return db.execute('Select * from products')
  }
  static findById(id){
    
  }
};
