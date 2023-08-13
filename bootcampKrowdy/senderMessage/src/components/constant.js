import KeyBy from "lodash.keyby";

export const nUser = 1;

export const viewForm = {
  formTypeMessage: false,
  formChannel: false,
  formEmail: false,
  formMessage: false,
  formWhatsapp: false
};

export let viewQueue = [];
export let viewStack = [];

Array.prototype.top = function() {
  return this[this.length - 1];
};

export const informationDefault = [
    {
        id: 1,
        unique: "invitacion",
        title: "Invitacion",
        channels: [
            {  
                id: 1,
                title: "Correo Electronico",
                view: "formEmail",
                subject: "Invitacion a proceso",
                message: "Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]",
                selected: false
            },
            {
                id: 2,
                title: "Mensaje de Texto",
                view: "formMessage",
                subject: "",
                message: "Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]",
                selected: false
            },
            {
                id: 3,
                title: "Whatsapp",
                view: "formWhatsapp",
                subject: "",
                message: "Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]",
                selected: false   
            }
        ]
    },
    {
        id: 2,
        title: "Recordatorio de procesos",
        unique: "recordatorio",
        channels: [
            {
                id: 1,
                title: "Correo Electronico",
                view: "formEmail",
                subject: "Recordatorio de Proceso",
                message: "Hola, [userName] nos gustaria recordarte que tienes pendiente un proceso. Entra aqui para continuar [Link]",
                selected: false
            },
            {
                id: 2,
                title: "Mensaje de Texto",
                view: "formMessage",
                subject: "",
                message: "Hola, [userName] nos gustaria recordarte que tienes pendiente un proceso.  Entra aqui para continuar [Link]",
                selected: false
            },
            {
                id: 3,
                title: "Whatsapp",
                view: "formWhatsapp",
                subject: "",
                message: "Hola, [userName] nos gustaria recordarte que tienes pendiente un proceso.  Entra aqui para continuar [Link]",
                selected: false
            }
        ]
    },
    {
        id:3,
        title: "Personalizado",
        unique: "personalizado",
        channels: [
            {
                id: 1,
                title: "Recordatorio de Proceso",
                view: "formEmail",
                subject: "",
                message: "",
                selected: false
            },
            {
                id: 2,
                title: "Mensaje de Texto",
                view: "formMessage",
                subject: "",
                message: "",
                selected: false
            },
            {
                id: 3,
                title: "Whatsapp",
                view: "formWhatsapp",
                subject: "",
                message: "",
                selected: false
            }
        ]
    }
]

export const infoConfigBy = KeyBy(informationDefault, "unique");

export var result = {};