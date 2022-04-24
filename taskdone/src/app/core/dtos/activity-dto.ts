export class ActivityDto{
    codigo: string;
    estatus: string;
    fechaEjecucion: Date;
    diasRetraso: number;
    idResponsable: number;
    fechaCreacion: Date;
    fechaModificacion?: Date;

    constructor(codigo: string, estatus: string, 
        fechaEjecucion: Date, diasRetraso: number, 
        idResponsable: number, fechaCreacion: Date, fechaModificacion: Date) {

        this.codigo = codigo;
        this.estatus = estatus;
        this.fechaEjecucion = fechaEjecucion;
        this.diasRetraso = diasRetraso;
        this.idResponsable = idResponsable;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.estatus = estatus
    }
}