interface Quiz{//quiz interface
 type:string
 name:string
 marks:number
}
interface Course{
  name:string
  author:string
  subject:string
}

class Sellable<T>{
public cart:T[]=[]
}