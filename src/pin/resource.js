export default class PinResource {
  static get $inject() { return ['$http']; }
  constructor($http) {
    this.$http = $http;
    this.endpoint = '/api/pins';
  }

  find(params, timeout) {
    return this.$http.get(this.endpoint, { params, timeout }).then(res => res.data);
  }

  findById(id) {
    return this.$http.get(`${this.endpoint}/${id}`).then(res => res.data);
  }

  create(pin) {
    return this.$http.post(`${this.endpoint}`, pin).then(res => res.data);
  }

  update(pin) {
    return this.$http.put(`${this.endpoint}/${pin.id}`, pin).then(res => res.data);
  }

  destroy(id) {
    return this.$http.delete(`${this.endpoint}/${id}`).then(res => res.data);
  }
}
