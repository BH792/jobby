import { normalize, schema } from 'normalizr';

// const job = new schema.Entity('job')
// const companySchema = new schema.Entity('company', {
//   jobs: [job]
// })
// const companyListSchema = [ companySchema ]
//
// export default (data) => {
//   return normalize(data, companyListSchema)
// }

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
