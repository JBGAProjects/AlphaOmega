import { HttpInterceptorFn } from "@angular/common/http";

//No está en uso ya que estamos usando dummy apis
export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Clona la solicitud y agrega el token de autorización
    const modifiedReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`),
    });
    return next(modifiedReq);
  }

  // Si no hay token, pasa la solicitud sin modificar
  return next(req);
};
