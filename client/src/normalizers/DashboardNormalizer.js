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

export function normalizeAllData(data) {
  return normalize(data, user)
}

const companySchema = new schema.Entity('companies')
const jobSchema = new schema.Entity('jobs', {
  company: companySchema
})

const jobListSchema = [ jobSchema ]

export default (data) => {
  console.log(data);
  console.log(normalize(data, jobListSchema));
  return normalize(data, jobListSchema)
}
