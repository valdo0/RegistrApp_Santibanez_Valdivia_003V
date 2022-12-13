export interface Usuario {
    jornada:string;
    nombre:string;
    rol:string;
    sede:string;

}
export interface Top{
    status:string;
    data:Data[];
  
  }
  export interface Data{
    date:string;
    title:string;
    type:string;
    inalienable:boolean;
    extra:string;
  
  }
  