Package.describe({
  name: 'vulcan:forms-tags',
  summary: 'Vulcan tag input package',
  version: '1.16.7',
  git: 'https://github.com/VulcanJS/Vulcan.git',
});

Package.onUse(function(api) {
  api.use(['vulcan:core@=1.16.7', 'vulcan:forms@=1.16.7']);

  api.mainModule('lib/export.js', ['client', 'server']);
});
