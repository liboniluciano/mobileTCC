angular.module('app.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        // Definição da tela que será exibida caso o usuário digite alguma url inválida
        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
              .state('cadastro', {
                url: '/cadastro',
                templateUrl: 'templates/cadastro.html',
                controller: 'cadastroCtrl'
            })

              .state('estabelecimento', {
                url: '/estabelecimento',
                templateUrl: 'templates/estabelecimento.html',
                //controller: 'homeCtrl'
            })
              .state('teste', {
                url: '/teste',
                templateUrl: 'templates/teste.html',
                controller: 'ExampleController'
            })
    });