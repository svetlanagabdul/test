import { Injectable } from '@angular/core';
import DocumentApproveModel from './DocumentApproveModel';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DocumentService {

	constructor(private http: HttpClient) { }

	sendForm(form: DocumentApproveModel): Observable<any> {
		console.log(form);
		return of("Документ успешно утвержден");
	}

	getDocument(): Observable<any> {
		return this.http.get('assets/document.json').pipe(
			shareReplay(),
		);
	}

}
