export class ActivityDto{
    id: number;
    codigo: string;
    estatus: string;
    fechaEjecucion: Date;
    diasRetraso: number;
    responsable: number;
    nombreResponsable: string;
    fechaCreacion: Date;
    fechaModificacion?: Date;

    constructor(id: number, codigo: string, estatus: string, 
        fechaEjecucion: Date, diasRetraso: number, 
        responsable: number, nombreResponsable: string, fechaCreacion: Date, fechaModificacion: Date) {
        
        this.id = id;
        this.codigo = codigo;
        this.estatus = estatus;
        this.fechaEjecucion = fechaEjecucion;
        this.diasRetraso = diasRetraso;
        this.responsable = responsable;
        this.nombreResponsable = nombreResponsable;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.estatus = estatus
    }
}