Package.describe({
  name: 'vulcan:events-intercom',
  summary: 'Vulcan Intercom integration package.',
  version: '1.16.7',
  git: 'https://github.com/VulcanJS/Vulcan.git',
});

Package.onUse(function(api) {
  api.use(['vulcan:core@=1.16.7', 'vulcan:events@=1.16.7']);

  api.mainModule('lib/client/main.js', 'client');
  api.mainModule('lib/server/main.js', 'server');
});
