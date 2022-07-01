import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(NgModel)filterInput!: NgModel;

  cities: City[] = [];
  selection!: City;
  color!: string;
  criteria = '';
  label!: string;
  name!: string;

  constructor(private readonly dataSvc: DataService) { }


  ngOnInit(): void {
    this.dataSvc.selectedCity$.subscribe((city:City) => this.selection = city)
    this.dataSvc.getCities()
      .subscribe(cities => {
        //
        this.cities = [...cities];
      });
  }


  updateCity(city:City): void {
    this.dataSvc.updateCity(city).subscribe( res => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    })
  }
  addNewCity(city: string): void {
    //this.cities.push(city);
    this.dataSvc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    });
  }

  onCitySelected(city: City): void {
    this.dataSvc.setCity(city);
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')){
      this.dataSvc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id!== id);
        this.cities = [...tempArr];
        this.onClear();
      });
    }
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: ''
    }
  }
}
