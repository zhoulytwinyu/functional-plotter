export function toDomXCoord_Linear(width,minX,maxX,dataX){
  return (dataX-minX)/((maxX-minX)/width);
}

export function fromDomXCoord_Linear(width,minX,maxX,domX){
  return domX*((maxX-minX)/width) + minX;
}

export function toDomYCoord_Linear(height,minY,maxY,dataY){
  return height-(dataY-minY)/((maxY-minY)/height);
}

export function fromDomYCoord_Linear(height,minY,maxY,dataY){
  return (height-domX)*((maxY-minY)/height) + minY;
}