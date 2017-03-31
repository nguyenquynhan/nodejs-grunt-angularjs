angular.module('scotchApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"jumbotron text-center\"><h1>About Page</h1><p>{{ message }}</p></div>"
  );


  $templateCache.put('views/contact.html',
    "<div class=\"jumbotron text-center\"><h1>Contact Page</h1><p>{{ message }}</p></div>"
  );


  $templateCache.put('views/home.html',
    "<div class=\"jumbotron text-center\"><h1>Home Page</h1><p>{{ message }}</p></div>"
  );

}]);
