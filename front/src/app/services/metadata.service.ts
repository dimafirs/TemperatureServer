import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Version} from '../model/version';

@Injectable()
export class MetadataService {
  CURRENT_VERSION_URL: string = "api/version/current";

  constructor(private http: HttpClient) {
  }

  getCurrentVersion(): Observable<Version> {
    return this.http.get<Version>(this.CURRENT_VERSION_URL).pipe(
      catchError(error => throwError(error))
    );
  }
}
