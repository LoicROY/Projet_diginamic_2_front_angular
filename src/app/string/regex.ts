export const REGEX: any = {

    /** Pattern pour email */
    EMAIL: /^[a-zA-Z-0-9._-]{1,}@[a-zA-Z-0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$/g,

    /** Pattern pour numéro de téléphone */
    TEL: /^0[1-9][0-9]{8}$/g,

    /** Pattern pour une date */
    DATE: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/g

}