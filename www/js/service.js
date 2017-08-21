angular.module('app.service', [])

  .service('Estabelecimentos', Estabelecimentos)

  Estabelecimentos.$inject = ['$http'];

  function Estabelecimentos($http) {
    return {
        getEstabelecimentos: getEstabelecimentos,
        postEstabelcimentos: postEstabelecimentos
    };

    function getEstabelecimentos() {
        var req = {
            method: 'GET',
            url: 'http://localhost:3000/consulta'
        };

        return $http(req)
            .then(function (result){
                return result.data;
                console.log('Get Estabelecimentos', response);
            })
            .catch(function(error){
                console.log(error);
            });
    };

    function postEstabelecimentos() {
        return $http.post('http://localhost:3000/insere')
          .then(function (response) {
            console.log('Inseriu Produto', response);
            return response.data;
          });
    };
} 
