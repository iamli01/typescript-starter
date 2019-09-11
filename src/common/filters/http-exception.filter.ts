import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  /*
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()

    response
      .status(status)
      .json({
        statusCode: status,
        date: new Date().toLocaleDateString(),
        path: request.url,
      });
  }
  */

  // 全局过滤器使用自定义 异常类
  catch(exception, host: ArgumentsHost) { 
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()

    if (exception instanceof ApiException) {
      response
        .status(status)
        .json({
          errorCode: exception.getErrorCode(),
          errorMessage: exception.getErrorMessage(),
          date: new Date().toLocaleDateString(),
          path: request.url,
        });

    } else {

      response
        .status(status)
        .json({
          statusCode: status,
          date: new Date().toLocaleDateString(),
          path: request.url,
        });
    }
  }

}
