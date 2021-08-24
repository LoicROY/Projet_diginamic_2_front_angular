
export interface Absence  {
  "id"?: number,
  "statut": ('INITIALE' | 'VALIDEE' | 'EN_ATTENTE_VALIDATION' | 'REJETEE'),
  "type": ('CongeAnticipe' | 'CongePaye' | 'CongeSansSolde' | 'JourFerie' | 'RttEmploye' | 'RttEmployeur'),
  "dateDebut"?: Date,
  "dateFin"?: Date,
  "motif"?: string,
  "date"?: Date,
  "jour"?:  Date,
  "libelle"?: string,
}
