import { normalize, schema } from 'normalizr';

const contactSchema = new schema.Entity('contacts')

const contactListSchema = [ contactSchema ]

export default (data) => {
  return normalize(data, contactListSchema)
}
