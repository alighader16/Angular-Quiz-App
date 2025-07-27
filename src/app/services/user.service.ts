import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cache = new Map<number, any>();
  private readonly API_KEY = 'reqres-free-v1';

  private readonly headers = {
    'x-api-key': this.API_KEY
  };

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    if (this.cache.has(page)) return of(this.cache.get(page));

    return this.http.get(`https://reqres.in/api/users?page=${page}`, { headers: this.headers }).pipe(
      tap(data => this.cache.set(page, data))
    );
  }

  getUser(id: number): Observable<any> {
    for (let cached of this.cache.values()) {
      const user = cached.data.find((u: any) => u.id === id);
      if (user) return of({ data: user });
    }

    return this.http.get(`https://reqres.in/api/users/${id}`, { headers: this.headers });
  }
}
