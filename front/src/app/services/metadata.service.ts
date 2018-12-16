import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class MetadataService {
  CURRENT_VERSION_URL: string = "api/version/current";

  constructor(private http: HttpClient) {
  }

  getCurrentVersion(): Observable<string> {
    return this.http.get<string>(this.CURRENT_VERSION_URL).pipe(
      catchError(error => throwError(error))
    );
  }
}
