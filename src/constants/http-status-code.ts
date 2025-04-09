class Status {
  // 1XX Informasi
  static readonly CONTINUE = 100;
  static readonly SWITCHING_PROTOCOLS = 101;
  static readonly PROCESSING = 102;

  // 2XX Sukses
  static readonly OK = 200;
  static readonly CREATED = 201;
  static readonly ACCEPTED = 202;
  static readonly NO_CONTENT = 204;

  // 3XX Redirection
  static readonly MOVED_PERMANENTLY = 301;
  static readonly FOUND = 302;
  static readonly SEE_OTHER = 303;
  static readonly NOT_MODIFIED = 304;
  static readonly TEMPORARY_REDIRECT = 307;
  static readonly PERMANENT_REDIRECT = 308;

  // 4XX Client Error
  static readonly BAD_REQUEST = 400;
  static readonly UNAUTHORIZED = 401;
  static readonly FORBIDDEN = 403;
  static readonly NOT_FOUND = 404;
  static readonly METHOD_NOT_ALLOWED = 405;
  static readonly CONFLICT = 409;
  static readonly UNPROCESSABLE_ENTITY = 422;

  // 5XX Server Error
  static readonly INTERNAL_SERVER_ERROR = 500;
  static readonly NOT_IMPLEMENTED = 501;
  static readonly BAD_GATEWAY = 502;
  static readonly SERVICE_UNAVAILABLE = 503;
  static readonly GATEWAY_TIMEOUT = 504;

  // Helper
  static isError(status: number): boolean {
    return status >= 400;
  }

  static isSuccess(status: number): boolean {
    return status >= 200 && status < 300;
  }
}

export default Status;
