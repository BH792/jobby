import { normalize, schema } from 'normalizr';

const companySchema = new schema.Entity('company')
const jobSchema = new schema.Entity('jobs', {
  company: companySchema
})

const jobListSchema = [ jobSchema ]

export default (data) => {
  // let normalizedJobs = normalize(data, jobListSchema)
  // normalizedJobs.result = data.sort((jobA, jobB) => {
  //   if (jobA.order > jobB.order) {
  //     return 1
  //   } else if (jobA.order < jobB.order) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // })
  return normalize(data, jobListSchema)
}
