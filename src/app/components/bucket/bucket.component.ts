import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../models/bucket.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

   myBucket$?:Observable<Bucket[]>; 

   constructor(private store: Store<{ buckets: Bucket[] }>) {
    this.myBucket$ = this.store.select('buckets');
  }

}
