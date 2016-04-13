import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if(param !== "") {
        this.store.query('rental', {city: param}).then((result) => {
          this.set('filteredList',result);
        });
      } else {
        this.set('filteredList');
      }
    },
    search(param) {
      let storeAction = param ?
        this.store.query('rental', {city: param}) :
        this.store.findAll('rental');

      storeAction.then((result) => {
        this.set('model', result);
      });
    }
  }
});
