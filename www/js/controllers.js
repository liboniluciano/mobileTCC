angular.module('app.controllers', [])


    .controller('loginCtrl', ['$scope','$cordovaVibration',
        function ($scope,$cordovaVibration) {
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

    .controller('cadastroCtrl', ['$scope','$cordovaCamera','$cordovaFile',
        function ($scope,$cordovaCamera,$cordovaFile) {
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

    .controller('ExampleController', ['$scope', '$cordovaCamera', '$cordovaFile',
        function ($scope, $cordovaCamera, $cordovaFile) {
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
