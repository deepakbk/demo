import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoTest';
  countTheCaharacter:any=['hello world','hello world'];
  reverseInput:any=["h","e","l","l","o"];
  resultOfReverse:any;
  resultForDuplicate:any;
  keyList = [];
  keyInput =  {  a: 5, b: { c: { d: 10 ,e: 20} }};
  ngOnInit(){
    this.UseOfThisandLet();
    this.CountCharacter();
    this.RemoveDuplicateString();
    this.reverse()
    this.ReverseUsingSplit();
    this.getKey();
    this.GetDictKeys(this.keyInput);
    this.PrintDictKeys();
  }
  UseOfThisandLet(){
// When accessing the gobal variable inside a function we will use 'this keyword'
console.log("Use of this keyword"+this.title);
// When Calling the local variable inside a function we will use 'let keyword keyword'
// let result = this.title;
// console.log("Use of let keyword"+result)
  }

  CountCharacter(){
    var count=0;
   var input= this.countTheCaharacter;
   for(let i=0 ;i<input.length;i++){
    for(let j=0 ;j<input.length;j++){
if(input[i][0] == input[i][j]){

  console.log(input[i][0]+ ":" +count)
  count++;
}
else{
  console.log(input[i][0]+ ":" +count)
}
    }
   }
  }

    RemoveDuplicateString(){
      const newArray = this.reverseInput.filter((value, index, array) => 
      !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
      this.resultForDuplicate = newArray;
}
reverse(){
  let revstr = "";
  for(let i = this.reverseInput.length-1; i>=0; i--){
      revstr = revstr+ this.reverseInput[i];
  }
  return revstr;
}

ReverseUsingSplit(){
  let revString = "";
  var d =this.reverseInput.toString(); 
  var reverseArray = this.reverseInput.reverse();
   revString = reverseArray.join("");
  return revString;
}

getKey(){
  //debugger;
  let value='';
  let input:any={  a: 5, b: { c: { d: 10 } }};
  for (let key in input) {
     value= input[key];
    // Use `key` and `value`
}
return value
}
IsDict(v){
    return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}
GetDictKeys(input){
  debugger;
  let keylen = Object.keys(input).length;
  var keys = Object.keys(input);
  this.keyList = this.keyList.concat(keys);
  var lastvalues = Object.values(input)[keylen-1];
  if(this.IsDict(lastvalues)){
    this.GetDictKeys(lastvalues);
  }
}
PrintDictKeys(){
  console.log("printing");
  console.log(this.keyList);
}



}
  
