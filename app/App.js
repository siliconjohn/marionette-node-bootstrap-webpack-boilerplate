import Marionette from 'backbone.marionette';
import ItemView from 'ItemView';

export default Marionette.Application.extend({
  region: '#app-region',

  onStart() {
    this.showView(new ItemView());
  }
});
