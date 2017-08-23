module.exports = {
  description: 'Adds js-mock and ember-jshamcrest to npm dependencies.',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addAddonToProject({name:'ember-jshamcrest', target: '~0.3.0'}).then(() => {
      return this.addPackageToProject('js-mock', '~1.0.0');
    })
  }
};
