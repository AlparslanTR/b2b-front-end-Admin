import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  // Benim Temam da DataTable Kullanıldığı İçin Filtreleme Kullanmıyorum Ama Başka Temalar İçin Hazır Kod Burada.!
 transform(value: any[], filterText: string): any[] {
  if (filterText ==""|| filterText==null) {
   return value;
  }
  return value.filter(x=>{
   const name = x.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
   return (name);
  });
 }

}
