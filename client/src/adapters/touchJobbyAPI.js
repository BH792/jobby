import JobbyAPI from './JobbyBackendAdapter';

export default class {
  static newTouch(touchInfo) {
    return JobbyAPI.post('/touches', touchInfo)
  }

  static updateTouch(touchInfo) {
    return JobbyAPI.post(`/touches/${touchInfo.id}`, touchInfo)
  }
}
