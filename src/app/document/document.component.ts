import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { DocumentService } from './document.service';
import DocumentApproveModel from './DocumentApproveModel';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit, OnDestroy {
  public docText$: Observable<any>;
  public docApproved = '';
  private userName = '';
  private sub: Subscription;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private documentService: DocumentService) { }

  documentForm = this.formBuilder.group({
    approver: [this.userName, Validators.required],
    resolution: ['', Validators.required],
    comment: [''],
    state: ['', Validators.required],
  });

  ngOnInit() {
    this.docText$ = this.documentService.getDocument();
    this.userName = this.authService.getUserName();
    this.documentForm.get('approver').setValue(this.userName);
  }

  onSubmit() {
    let documentFormParams: DocumentApproveModel = {
      approver: this.documentForm.get('approver').value,
      resolution: this.documentForm.get('approver').value,
      comment: this.documentForm.get('comment').value,
      state: this.documentForm.get('state').value,
    }
    this.sub = this.documentService.sendForm(documentFormParams).subscribe(res => this.docApproved = res);
  }

  setState(value) {
    this.documentForm.get('state').setValue(value);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
