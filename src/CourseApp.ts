interface Quiz{//quiz interface
 type:string
 name:string
 marks:number
}
interface Course{//course interface
  name:string
  author:string
  subject:string
}

class Sellable<T>{//sellable class which will inhert
public cart:T[]=[]

addToCart(product:T){
  this.cart.push(product)
}
}