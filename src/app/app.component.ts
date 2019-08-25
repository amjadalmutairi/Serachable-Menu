import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  countries = [
{ "key" : "1" , "value" : "Afghanistan"} ,
{ "key" : "2" , "value" : "Albania" } ,
{ "key" : "3" , "value" :  "Algeria" } ,
{ "key" : "4" , "value" :  "Andorra" } ,
{ "key" : "5" , "value" :  "Angola" } ,
{ "key" : "6" , "value" :  "Antigua & Deps" } ,
{ "key" : "7" , "value" :  "Argentina" } ,
{ "key" : "8" , "value" :  "Armenia" } ,
{ "key" : "9" , "value" :  "Australia" } ,
{ "key" : "10" , "value" :  "Austria" } ,
{ "key" : "11" , "value" :  "Very loooooooooooooooooooooooooooooooooong option" } ,
{ "key" : "12" , "value" :  "Bahamas" } ,
{ "key" : "13" , "value" :  "Bahrain" } ,
{ "key" : "14" , "value" :  "Bangladesh" } ,
{ "key" : "15" , "value" :  "Barbados" } ,
{ "key" : "16" , "value" :  "Belarus" } ,
{ "key" : "17" , "value" :  "Belgium" } ,
{ "key" : "18" , "value" :  "Belize" } ,
{ "key" : "19" , "value" :  "Benin" } ,
{ "key" : "20" , "value" :  "Bhutan" } ,
{ "key" : "21" , "value" :  "Bolivia" } ,
{ "key" : "22" , "value" :  "Bosnia Herzegovina" } ,
{ "key" : "23" , "value" :  "Botswana"} ]

 selectedCounty = ""
 testForm ;
 isSubmitted = false;

 constructor(private fb : FormBuilder){}

 ngOnInit(){
   this.testForm  =  this.fb.group({
        name: ['', Validators.required],
        country: ['', Validators.required]
    });
 }
 get controls(){
   return this.testForm.controls
 }
 getSelectedCountry(countryCode){
    this.controls.country.setValue(countryCode)
 }

 onSubmit(){
   this.isSubmitted = true;
   if(this.testForm.valid){
     console.log("submitted and valid")
   }
 }
}