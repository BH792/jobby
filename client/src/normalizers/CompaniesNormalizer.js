import { normalize, schema } from 'normalizr';

const companySchema = new schema.Entity('companies')

const companyListSchema = [ companySchema ]

export default (data) => {
  return normalize(data, companyListSchema)
}
