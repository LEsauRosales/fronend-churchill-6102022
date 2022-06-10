import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'geofilter'
})
export class GeofilterPipe implements PipeTransform {

  transform(value: any, gName: string): any {
      if(gName === ""){
          return value;
      }
      const geofencingArray:any[]=[];
      for(let i=0; i<=value.lenght; i++){
        let geoName:string=value[i].name;
        if(geoName.startsWith(gName)){
            geofencingArray.push(value[i])
        }
      }
    return geofencingArray;
  }

}
