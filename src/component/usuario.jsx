import React from 'react';

export const Usuario = () =>{

    class usuario {
        //Construimos plantilla de objetos
        constructor(nombre,apellido,libros,mascotas){
            this.nombre=nombre
            this.apellido=apellido
            this.libros=libros
            this.mascotas=mascotas
        }
        //Metodo que retorna nombre y apellido
        getFullName(){
            return (`${this.nombre} ${this.apellido}`)
        }
        //Metodo que agrega mascota
        addMascotas(mascota){
            this.mascotas.push(mascota)
            return(this.mascotas)
        }
        //Metodo que retorna cantidad de mascotas
        countMascotas(){
            return(this.mascotas.length)
        }
        //Metodo que agrega libros y su autor
        addBook(name,author){
            this.libros.push({name:name,author:author})
            return(this.libros)
        }
        //Metodo que retorna los nombres de cada libro de la lista
        getBookNames(){
            return (this.libros.map(name=>name.name))
        }
    }

    const Ani = new usuario("Ani","Lorenzetti",[{name:"Hopendat",author:"Pamela Stupia"}],["gato"])
    console.log(Ani.getFullName())
    console.log(Ani.addMascotas("perro"))
    console.log(Ani.countMascotas())
    console.log(Ani.addBook("Hopendat 2","Pamela STUPID"))
    console.log(Ani.getBookNames())

    return(
        <>
        </>
    )
}