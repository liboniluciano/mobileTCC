angular.module('app.service', [])

  .service('Estabelecimentos', Estabelecimentos)

Estabelecimentos.$inject = ['$http'];

function Estabelecimentos($http) {
  return {
    getEstabelecimentoEsp: getEstabelecimentoEsp,
    getEstabelecimentos: getEstabelecimentos,
    postEstabelcimentos: postEstabelecimentos,
    getServicos: getServicos,
    getPagamentos: getPagamentos

   
  };

  function getEstabelecimentos() {
    var req = {
      method: 'GET',
      url: 'http://localhost:3000/consulta'
    };

    return $http(req)
      .then(function (result) {
        return result.data;
        console.log('Get Estabelecimentos', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

   function getServicos() {
    var req = {
      method: 'GET',
      url: 'http://localhost:3000/consultaServicos'
    };

    return $http(req)
      .then(function (result) {
        return result.data;
        console.log('Get Estabelecimentos', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function getEstabelecimentoEsp() {
    var req = {
      method: 'GET',
      url: 'http://localhost:3000/consultaEspecifico'
    };

    return $http(req)
      .then(function (result) {
        return result.data;
        console.log('Get Estabelecimentos Especificos', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getPagamentos() {
    var req = {
      method: 'GET',
      url: 'http://localhost:3000/consultaPagamento'
    };

    return $http(req)
      .then(function (result) {
        return result.data;
        console.log('Get Pagamentos', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function postEstabelecimentos() {
    return $http.post('http://localhost:3000/insere')
      .then(function (response) {
        console.log('Inseriu Produto', response);
        return response.data;
      });
  };
} 
