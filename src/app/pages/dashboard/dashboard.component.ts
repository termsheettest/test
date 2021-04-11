import { Component, OnInit, ViewChild } from '@angular/core';
import { Deal } from 'src/app/models/Deal';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  initialData: any = [
      {name: 'Deal 1', price: '200200.10', address: '123 Main St', city:  'Rochester', state: 'NY', postalCode: '12343', noi: '7000'}, 
      {name: 'Deal 2', price: '200200.10', address: '123 North Main St', city:  'Rochester', state: 'NY', postalCode: '12343', noi: '5000'}, 
      {name: 'Deal 3', price: '20000200.10', address: '123 East Main St', city:  'Rochester', state: 'NY', postalCode: '12343', noi: '1000000'}, 
      {name: 'Deal 4', price: '10000200.10', address: '123 West Main St', city:  'Rochester', state: 'NY', postalCode: '12343', noi: '800000'}, 
      {name: 'Deal 5', price: '4500200.10', address: '123 South Main St', city:  'Rochester', state: 'NY', postalCode: '12343', noi: '50000'}, ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<Deal>;
  displayedColumns: string[] = ['dealName', 'purchasePrice', 'address', 'noi', 'capRate'];

  constructor() { }

  ngOnInit(): void {
    this.initDealTable();
  }

  initDealTable(){
    const deals = Array.from(this.initialData.sort(s => s.name), x => this.populateDeals(x));
    this.dataSource = new MatTableDataSource(deals);
  }

  updateDeals(deal){
    console.log(deal);
    this.initialData.push(deal);
    this.initDealTable();
  }

  populateDeals(deal: any): Deal {
    return {
      name: deal.name,
      purchasePrice: parseFloat(deal.price),
      address: deal.address + " " + deal.city + ", " + deal.state + " " + deal.postalCode,
      netOperatingIncome: parseFloat(deal.noi),
      capRate: ( parseFloat(deal.noi) / parseFloat(deal.price) )
    };
  }

}
