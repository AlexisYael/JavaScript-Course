'use strict'

/* - Arreglos en JavaScript - */

//Un arreglo en JavaScript es una colección de datos de manera bidimencional la cual tiene la siguiente sintaxis.
var arr1 = []; // Esta es la declaración de un arreglo vacio.
var arr2 = new Array(); // Esta es la forma de objeto.
console.log(arr1);
console.log(arr2);

//Un arrego en JS puede contener distintos tipos de datos
var arr3 = [1, 2, 3, "Uno", "Dos", "Tres", { data: "Soy un dato de un objeto", num: 123 }];
var arr4 = new Array(1, 2, 3, "Uno", "Dos", "Tres", { data: "Soy un dato de un objeto", num: 123 });
console.log(arr3);
console.log(arr4);

//Un arreglo puede contener arreglos para pasar a una forma multidimensional. Para no confundir lo podemos visualizar como una matiz.
var arreglo1 = [arr3, arr4];
console.log(arreglo1);

//Para insertar elementos en un arreglo es de la siguiente forma
arr1.push("dato nuevo");
console.log(arr1);

//Para sacar elemntos existen dos formas, pop() es la funcion que saca el ultimo dato
arr3.pop();
console.log(arr3);

//El otro metodo es por medio de indices, para lo cual usaremos dos nuevas funciones
var pos = arr3.indexOf("Uno") //Esta función nos permite obtener la posición del dato
var dato = arr3.splice(pos, 1); //Esta función toma un dato desde su posición inicial a la final
console.log(pos);
console.log(dato);
console.log(arr3);

//Podemos convertir un arreglo en string de la siguiente manera, la unica condición es que se convierte a string pero separado por comas
var arr_str = arr3.join();
console.log(arr_str);

//De igual manera podemos pasar un string a un arreglo delimitando la separación con caracteres especiales
var str = "dato1,dato2,dato3";
var str_arr = str.split(",");
console.log(str_arr);

//Exiten funcione ya de ordenamiento en JS y son las siguientes
var str_ord = ["B", "X", "W", "A"];
console.log(str_ord.sort()); //La funcion sort() nos permite ordenar albafeticamente
var str_num = [3, 8, 7, 1, 2];
console.log(str_num.sort()); //La función sort() nos permite ordenar por numeros también
var str_rev = ["a", "b", "c", "d"];
console.log(str_rev.reverse()); //La funcion reverse() voltea el arreglo

//Existen varios metodos de recorrido de arreglo y el for in es uno que es especifico de recorrido de arreglos
for (let dato in arr3) {
    console.log(arr3[dato]);
}

//Una froma de busqueda de datos en arreglos es de la siguiente manera

var busqueda1 = arr4.find(data => data === 1); //LA funcion find() busca el elemento en el arreglo y retornara el elemneto, findIndex() retornara la posición
var busqueda2 = arr4.find(data => data === 23);
console.log(busqueda1);
console.log(busqueda2);