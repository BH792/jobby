import { normalize, schema } from 'normalizr';

const companySchema = new schema.Entity('companies')
const jobSchema = new schema.Entity('jobs', {
  company: companySchema
})

const jobListSchema = [ jobSchema ]

export default (data) => {
  return normalize(data, jobListSchema)
}
