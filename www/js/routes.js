angular.module('app.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        // Definição da tela que será exibida caso o usuário digite alguma url inválida
        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('menu', {
                url: '/menu',
                abstract: true,
                templateUrl: 'templates/menu.html'
            })

            .state('menu.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html'
                    }
                }
            })

             .state('menu.cadastro', {
                url: '/cadastro',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/cadastro.html',
                        controller: 'cadastroCtrl'
                    }
                }
            })

              .state('menu.estabelecimento', {
                url: '/estabelecimento',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/estabelecimento.html'
                    }
                }
            })
              .state('menu.lista', {
                url: '/lista',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/lista.html',
                        controller: 'listaCtrl'
                    }
                }
            })
//Aqui
            .state('teste', {
                url: '/teste',
                templateUrl: 'templates/teste.html',
                controller: 'ExampleController'
            })
    });