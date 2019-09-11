import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus } from '@nestjs/common';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api-error-code.enum';

@Injectable()
export class MytestIdPipe implements PipeTransform {
  /*
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    return value;
  }
*/

  async transform(value: any, metadata: ArgumentMetadata) {
   
    console.log(value);
    console.log(metadata);
    value = parseInt(value)

    if(isNaN(value) || typeof value !== 'number' || value <= 0) {
      throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}
