import { normalize, schema } from 'normalizr';

const touch = new schema.Entity('touches')
const job = new schema.Entity('jobs', {
  touches: [touch]
})
const contact = new schema.Entity('contacts', {
  touches: [touch]
})
const company = new schema.Entity('companies', {
  jobs: [job],
  contacts: [contact]
})
const user = new schema.Entity('user', {
  companies: [company]
})

export default (data) => {
  return normalize(data, user)
}
