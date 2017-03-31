angular.module('app.controllers', [])


    .controller('loginCtrl', ['$scope', '$cordovaVibration',
        function ($scope, $cordovaVibration) {
            $scope.goHome = function () {
                window.location.href = "#/menu/home";
                $cordovaVibration.vibrate(100);
            };

        }])

    .controller('homeCtrl', ['$scope',
        function ($scope) {
            $scope.goCad = function () {
                window.location.href = "#/menu/cadastro";
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




    .controller('ExampleController', ['$scope', '$cordovaCamera', '$cordovaFile',
        function ($scope, $cordovaCamera, $cordovaFile) {
            $scope.takePicture = function () {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    // An error occured. Show a message to the user
                });
            }
            $scope.choosePhoto = function () {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    // An error occured. Show a message to the user
                });
            }

        }])
    .controller('reservaCtrl', function ($scope) {

        $scope.deleteItem = function (item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };

        $scope.selectedValues = [];

        $scope.servicos = [
            { id: '1', nome: 'Banho e tosa', valor: '30' },
            { id: '2', nome: 'Vacina', valor: '25' },
            { id: '3', nome: 'Banho', valor: '20' },
        ];

        $scope.showSelectValue = function (mySelect) {
            console.log(mySelect);

        }

    });
