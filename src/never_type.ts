interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}
interface Triangle{
    kind:"triangle"
    length:number,
    width:number
}
type Shape=Circle| Square |Triangle

function getShapeArea(val:Shape){
  switch(val.kind){
    case "circle":
        return val.radius*Math.PI
    case "square":
        return val.side* val.side
    default:
        const defaultshape:never=val
        return defaultshape

  }
}