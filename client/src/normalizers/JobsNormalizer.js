import { normalize, schema } from 'normalizr';

const jobSchema = new schema.Entity('jobs')
const jobListSchema = [ jobSchema ]

export default (data) => {
  return normalize(data, jobListSchema)
}
