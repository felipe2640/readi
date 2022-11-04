import ClientService from '../services/client.service.js'
async function createClient(req, res, next) {
	try {
		let client = req.body;
		if (
			!client.name ||
			!client.cpf ||
			!client.phone ||
			!client.email ||
			!client.adress
		) {
			throw new Error("Name,CPF, PHONE, Email, e Address são obrigatórios.");
		}
		//ClientService
		client = await ClientService.createClient(client)
		res.send(client);
		logger.info(`POST /client - ${JSON.stringify(client)}`);
	} catch (err) {
		next(err);
	}
}

async function getClients(req, res, next) {
	try {
		res.send(await ClientService.getClients())
		logger.info(" GET /client")
	} catch (error) {
		next(error)
	}
}

async function getClient(req, res, next) {
	try {
		res.send(await ClientService.getClient(req.params.id))
		logger.info(" GET /client")
	} catch (error) {
		next(error)
	}
}

async function deleteClient(req, res, next) {
	try {
		res.send(await ClientService.deleteClient(req.params.id))
		logger.info(" DELETE /client")
	} catch (error) {
		next(error)
	}
}

async function updateClient(req, res, next) {
	try {
		let client = req.body;
		if (
			!client.name ||
			!client.cpf ||
			!client.phone ||
			!client.email ||
			!client.adress ||
			!client.clientId
		) {
			throw new Error("Name,CPF, PHONE, Email, e Address são obrigatórios.");
		}
		//ClientService
		client = await ClientService.updateClient(client)
		res.send(client);
		logger.info(`PUT /client - ${JSON.stringify(client)}`);
	} catch (error) {
		next(error)
	}
}


export default { createClient, getClients, getClient, deleteClient, updateClient };
