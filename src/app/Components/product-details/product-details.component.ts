import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

   productId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.productId =
      this.route.snapshot.paramMap.get('id') || '';

  }

}
