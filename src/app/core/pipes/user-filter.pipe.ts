import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.interface';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(tab: User[] | null, value : string) : User[] | undefined {
    if(tab){
    return tab?.filter(n =>  n.firstName.toLowerCase().includes(value.toLowerCase()) ||  n.lastName.toLowerCase().includes(value.toLowerCase()))
    }
    return
  }

  

}
