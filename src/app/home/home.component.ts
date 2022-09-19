import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

 nombre:string = "Luisa"; 
 edad:number= 19;

 numeros:number[]=[1,2,3,4,5,6,7,8,9,10];
//  personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/Patricia-fernandez.webp?alt=media&token=e0b0d1ad-5bce-45ff-b91d-545e2bddbc36","https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/Armando_Mendoza_Betty_La_Fea.webp?alt=media&token=2f0bd789-045b-447d-9c76-f20bf135af9a","https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/6ml9k-8l_400x400.jpg?alt=media&token=e48df2bc-60df-4a8f-ba13-9d2f55300756","https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/GettyImages-818664.webp?alt=media&token=a3b744b8-f3e4-42dc-8432-ab15aa1fcd6f","https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/nicolas.jpg?alt=media&token=0fdc3da0-f4b5-45b4-9bf0-6c7295433003"]
personajes:Personaje[]=[
  {"nombre":"Patricia Fernandez", 
  "edad":35,
  "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/Patricia-fernandez.webp?alt=media&token=e0b0d1ad-5bce-45ff-b91d-545e2bddbc36"},
  {"nombre":"Armando Mendoza", 
  "edad":35,
  "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/Armando_Mendoza_Betty_La_Fea.webp?alt=media&token=2f0bd789-045b-447d-9c76-f20bf135af9a"},
  {"nombre":"Marcela Valencia",
   "edad":35,
   "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/6ml9k-8l_400x400.jpg?alt=media&token=e48df2bc-60df-4a8f-ba13-9d2f55300756"},
  {"nombre":"Beatriz Pinzón", 
  "edad":35,
  "foto":"https://firebasestorage.googleapis.com/v0/b/banda-63ab1.appspot.com/o/nicolas.jpg?alt=media&token=0fdc3da0-f4b5-45b4-9bf0-6c7295433003"}
]
  constructor() { }

 

}
