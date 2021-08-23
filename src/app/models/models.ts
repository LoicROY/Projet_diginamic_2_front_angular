
export interface absence  {
  "id": number,
  "statut": ('INITIALE' | 'VALIDEE' | 'EN_ATTENTE_VALIDATION' | 'REJETEE'),
  "type":string,
  "dateDebut"?: Date,
  "dateFin"?: Date,
  "motif"?: string,
  "date"?: Date,
  "jour"?:  Date,
  "libelle"?: string,
}


