
export interface Absence  {
  id?: number,
  statut: ('INITIALE' | 'VALIDEE' | 'EN_ATTENTE_VALIDATION' | 'REJETEE'),
  type: ('CongeAnticipe' | 'CongePaye' | 'CongeSansSolde' | 'JourFerie' | 'RttEmploye' | 'RttEmployeur'),
  dateDebut?: string,
  dateFin?: string,
  motif?: string,
  date?: string,
  jour?:  string,
  libelle?: string,
}
