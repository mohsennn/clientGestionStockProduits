import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.cookieService.get("token");
    const xhr = req.clone({
      headers: req.headers.set("Authorization", `Basic ${token}`)
    });
    return next.handle(xhr);
  }
}
