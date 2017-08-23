var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var core_use = require('cors');
var pg = require('pg');

app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
var config = {
  user: 'postgres', //env var: PGUSER 
  database: 'Node', //env var: PGDATABASE 
  password: '1234', //env var: PGPASSWORD 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};

var pool = new pg.Pool(config);


// rota com protocolo GET para seleção no banco de dados
app.get('/consulta', function (req, res) {
	
	// to run a query we can acquire a client from the pool, 
	// run a query on the client, and then return the client to the pool 
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * from tb_estabelecimento order by nome', 
      function(err, result) {
		//call `done()` to release the client back to the pool 
		done();
	 
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
		console.log(result.rows);
    res.json(result.rows); // servidor retorna a consulta em formato json
			
		});
	});
});

app.get('/consultaServicos', function (req, res) {
	
	// to run a query we can acquire a client from the pool, 
	// run a query on the client, and then return the client to the pool 
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * from tb_servicos where id_estabelecimento = 2 ', 
      function(err, result) {
		//call `done()` to release the client back to the pool 
		done();
	 
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
		console.log(result.rows);
    res.json(result.rows); // servidor retorna a consulta em formato json
			
		});
	});
});

app.get('/consultaPagamento', function (req, res) {
	
	// to run a query we can acquire a client from the pool, 
	// run a query on the client, and then return the client to the pool 
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('select se.id_tipo_pagamento, tp.desc_tipo_pagamento from tb_servicos se inner join tb_tipos_pagamentos tp ON se.id_tipo_pagamento = tp.id_tipo_pagamento where id_estabelecimento = 2 ', 
      function(err, result) {
		//call `done()` to release the client back to the pool 
		done();
	 
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
		console.log(result.rows);
    res.json(result.rows); // servidor retorna a consulta em formato json
			
		});
	});
});

app.get('/consultaEspecifico', function (req, res) {
	
	// to run a query we can acquire a client from the pool, 
	// run a query on the client, and then return the client to the pool 
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * from tb_estabelecimento where id_estabelecimento = 2', 
      function(err, result) {
		//call `done()` to release the client back to the pool 
		done();
	 
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
		console.log(result.rows);
    res.json(result.rows); // servidor retorna a consulta em formato json
			
		});
	});
});


app.get('/consultaEstabelecimentoEsp', function (req, res) {
	
	// to run a query we can acquire a client from the pool, 
	// run a query on the client, and then return the client to the pool 
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT e.nome,e.categoria,s.tipo_servico,s.valor, p.desc_tipo_pagamento from tb_estabelecimento e inner join tb_servicos s on e.id_estabelecimento = s.id_estabelecimento inner join tb_tipos_pagamentos p ON s.id_tipo_pagamento = p.id_tipo_pagamento where e.id_estabelecimento = 2'
    ,   
      function(err, result) {
		//call `done()` to release the client back to the pool 
		done();
	 
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
		console.log(result.rows);
    res.json(result.rows); // servidor retorna a consulta em formato json
			
		});
	});
});



app.post('/insere', function (req, res) {

// to run a query we can acquire a client from the pool, 
// run a query on the client, and then return the client to the pool 
//var registro = {codigo:'4', nome:'medalha', quantidade:'100', valor: '5.0'};
pool.connect(function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('insert into tb_reservas (id_servico, id_tipo_pagamento, id_estabelecimento, data_reserva, horario, fg_ativo) values (' + 
  	', \'' + req.body.id_servico + '\', ' + req.body.id_pagamento + ',' + req.body.estabelecimento +  req.body.data_reserva +  req.body.horario + req.body.fg_ativo +')', function(err, result) {
    //call `done()` to release the client back to the pool 
    done();
 
    if(err) {
      return console.error('error running query', err);
    }

    res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
  });
});
});

app.listen(3000)
