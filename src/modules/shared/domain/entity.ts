export interface Entity<Properties, PropertiesUpdate, Primitives> {
  properties: () => Properties
  delete: () => void
  update: (fields: PropertiesUpdate) => void
  toPrimitives: () => Primitives
}
