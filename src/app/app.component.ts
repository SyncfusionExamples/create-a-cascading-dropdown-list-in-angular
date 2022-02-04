import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Query } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dropdownlist';
  @ViewChild('country')
  public countryObject!: DropDownListComponent;
  @ViewChild('state')
  public stateObject!: DropDownListComponent;
  public onCountryChange(): void {
    this.stateObject.enabled = true;
    let childDataQuery: Query = new Query().where('CountryId', 'equal', this.countryObject.value);
    this.stateObject.query = childDataQuery;
  }
  public countryFields: Object = {text: 'CountryName', value: 'CountryId'};
  public countryData: Object[] = [
    { CountryName: 'United States', CountryId: '1' },
    { CountryName: 'Australia', CountryId: '2' }
  ];
  public stateFields: Object = {text: 'StateName', value: 'StateId' };
  public stateData: Object[] = [
    { StateName: 'New York', StateId: '101', CountryId: '1' },
    { StateName: 'Virginia ', StateId: '102', CountryId: '1' },
    { StateName: 'Tasmania ', StateId: '105', CountryId: '2' }
  ];

}
