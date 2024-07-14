import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResults } from './investment-result.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentResult?: InvestmentResults;

  constructor(private _investmentService: InvestmentService) {}

  get investmentResultData() {
    return this._investmentService.resultData;
  }
}
