import {bisect_left, bisect_right} from "./utils/bisect";

export function filterData(x,ys,minX,maxX) {
  let minInd = Math.max(bisect_left(x,minX),0);
  let maxInd = Math.min(bisect_right(x,maxX),x.length-1);
  let filteredX = x.slice(minInd,maxInd+1);
  let filteredYs = ys.map( (series)=>series.slice(minInd,maxInd+1) );
  return {filteredX,filteredYs}
}