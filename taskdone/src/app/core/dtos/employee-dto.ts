
export class EmployeeDto{
    id: number;
    codigo: string;
    nombre: string;
    apellido: Date;
    cedula: string;
    edad: number;
    celular: string;
    fechaCreacion: Date;
    fechaModificacion?: Date;

    constructor(id: number,codigo: string, nombre: string, 
        apellido: Date, cedula: string, edad: number, celular: string, fechaCreacion: Date, fechaModificacion: Date) {

        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.edad = edad;
        this.celular = celular
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
    }
}