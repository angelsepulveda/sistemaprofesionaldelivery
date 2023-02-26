export interface Entity<Properties, PropertiesUpdate> {
  properties: () => Properties
  delete: () => void
  update: (fields: PropertiesUpdate) => void
}
