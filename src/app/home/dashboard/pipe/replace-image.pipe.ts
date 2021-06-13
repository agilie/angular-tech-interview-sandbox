import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../interface/user.interface';

@Pipe({
  name: 'replaceImage'
})
export class ReplaceImagePipe implements PipeTransform {

  transform(value: IUser[], ...args: unknown[]): unknown {
    return value.map(user => {
      user.picture = 'https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg';
      return user;
    });
  }

}
