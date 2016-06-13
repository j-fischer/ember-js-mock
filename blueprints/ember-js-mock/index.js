module.exports = {
  description: 'Adds js-mock to bower dependencies.',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('js-mock', '~1.0.0');
  }
};
