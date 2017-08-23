angular.module('app.controllers', ['app.service'])


    .controller('loginCtrl', ['$scope', '$cordovaVibration',
        function ($scope, $cordovaVibration) {
            $scope.goHome = function () {
                window.location.href = "#/menu/home";
                $cordovaVibration.vibrate(100);
            };



        }])

    .controller('homeCtrl', ['$scope', 'Estabelecimentos',
        function ($scope, Estabelecimentos) {
            $scope.vm = {
                estabelecimentos: []
            };

            $scope.goCad = function () {
                window.location.href = "#/menu/cadastro";
            };

            $scope.teste = function () {
                console.log("hehehe");
            };

            $scope.consulta = function () {
                console.log("cheguei");
                Estabelecimentos.getEstabelecimentos()
                    .then(function (response) {
                        $scope.produtos = response;
                        console.log(response);
                        response.forEach(function (item) {
                            $scope.vm.estabelecimentos.push({
                               nome: item.nome,
                               categoria: item.categoria,
                               url_img: item.url_img
                            });
                        });
                    });
            };

            $scope.goReserva = function() {
                window.location.href = "#/menu/reserva";
            };

        }])

    .controller('cadastroCtrl', ['$scope', '$cordovaCamera', '$cordovaFile',
        function ($scope, $cordovaCamera, $cordovaFile) {
            //Volta pra home
            $scope.goHome = function () {
                window.location.href = "#/home";

            };
            //Volta pra login
            $scope.goLogin = function () {
                window.location.href = "#/menu/index";
            };

            $scope.goTeste = function () {
                window.location.href = "#/teste";
            };

            $scope.takePicture = function () {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                window.location.href = "#/menu/cadastro";

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    window.location.href = "#/menu/cadastro";
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    window.location.href = "#/menu/cadastro";
                }, function (err) {
                    // An error occured. Show a message to the user
                });
            }

        }])

    //Aqui
    .controller('listaCtrl', function ($scope) {

        $scope.deleteItem = function (item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };

        $scope.doRefresh = function () {
            // Subtract from the value of the first item ID to get the new one.
            var newId = $scope.items[0].id - 1;
            $scope.items.unshift({ id: newId });

            $scope.$broadcast('scroll.refreshComplete');
        };

        $scope.items = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 }
        ];
    })

    .controller('reservaCtrl', ['$scope','Estabelecimentos',
        function ($scope,Estabelecimentos,$ionicPopup,) {
            //Objeto que recebe os serviços daquele estabelecimento 
              $scope.vm = {
                estReserva: [],
                estPagamento: []
            };
          ;

            //Método da API que consulta serviços daquele estabelecimento
               $scope.consultaServicos = function () {
                console.log("cheguei");
                Estabelecimentos.getServicos()
                    .then(function (response) {
                        $scope.produtos = response;
                        console.log(response);
                        response.forEach(function (item) {
                            $scope.vm.estReserva.push({
                               id_servico: item.id_servico,
                               tipo_servico: item.tipo_servico,
                            });
                        });
                    });
            };

             //Método da API que consulta serviços daquele estabelecimento
               $scope.consultaPagamentos = function () {
                console.log("cheguei");
                Estabelecimentos.getPagamentos()
                    .then(function (response) {
                        $scope.produtos = response;
                        console.log(response);
                        response.forEach(function (item1) {
                            $scope.vm.estPagamento.push({
                               id_tipo_pagamento: item1.id_tipo_pagamento,
                               desc_tipo_pagamento: item1.desc_tipo_pagamento,
                            });
                        });
                    });
            };

        //Função que recupera serviço selecionado
        $scope.showSelectValue = function (mySelect) {
            console.log(mySelect);
        }
        //Função que recupera pagamento selecionado
        $scope.pegaFormaPagamento = function (formaPagamento) {
            console.log(formaPagamento);
        }
        //Objeto que vai receber itens da reserva
        $scope.dadosReserva =
            [];

        console.log($scope.horario);
        //Popup de confirmação
        $scope.addService = function () {
            //Pegar no objeto dados da reserva para exibir na popup - TODO
            var confirmPopup = $ionicPopup.confirm({
                title: 'Deseja confirmar?',
                template: 'Deseja confirmar sua reserva?',

            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('Sim');
                } else {
                    console.log('Não');
                }
            });

        };
    }])

    .controller('ultimasReservasCtrl', function ($scope) {
        //Objeto para ultimas reservasCtrl
        $scope.ultmasReservas = [
            { id: '1', nomeEstabelecimento: 'Pet Shop Santos Dummont', dataReserva: '21/03/2017', horarioReserva: '15h30', valor: 'R$150,00' },
            { id: '2', nomeEstabelecimento: 'Salão da Didica', dataReserva: '23/03/2017', horarioReserva: '17h30', valor: 'R$250,00' },
            { id: '3', nomeEstabelecimento: 'Consultório Odontológico', dataReserva: '28/03/2017', horarioReserva: '14h30', valor: 'R$80,00' },
            { id: '4', nomeEstabelecimento: 'Restaurante Barão', dataReserva: '01/04/2017', horarioReserva: '12h30', valor: 'R$50,00' },
        ];
    })
    .controller('estabelecimentoCtrl', ['$scope','Estabelecimentos',
        function ($scope,Estabelecimentos) {

             $scope.vm = {
                estabelecimentosEsp: []
            };

        //Objeto que consulta método da API específica

          $scope.consultaEsp = function () {
                console.log("cheguei");
                Estabelecimentos.getEstabelecimentoEsp()
                    .then(function (response) {
                        $scope.produtos = response;
                        console.log(response);
                        response.forEach(function (item) {
                            $scope.vm.estabelecimentosEsp.push({
                               nome: item.nome,
                               endereco: item.endereco,
                               numero: item.numero,
                               bairro: item.bairro,
                               telefone_1: item.telefone_1
                            });
                        });
                    });
            };

        $scope.horariosEstabelecimento = [
            { id: '1', diaSemana: 'Seg', horario: '8hrs às 17hrs' },
            { id: '2', diaSemana: 'Ter', horario: '8hrs às 17hrs' },
            { id: '3', diaSemana: 'Qua', horario: '8hrs às 17hrs' },
            { id: '4', diaSemana: 'Qui', horario: '8hrs às 17hrs' },
            { id: '5', diaSemana: 'Sex', horario: '8hrs às 17hrs' },
            { id: '6', diaSemana: 'Sáb', horario: '8hrs às 11hrs' },
        ];

        $scope.goReserva = function(){
           window.location.href = "#/menu/reserva"
        };

    }])


