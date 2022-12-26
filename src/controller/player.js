const logger = require('loglevel');
const { Player } = require('../models');

const createPlayer = async (request, h) => {
  try {
    const { name } = request.payload;
    let { balance } = request.payload;

    if(!balance) {
      balance = 0;
    }

    const newAccount = { name, balance };

    const result = await Player.create(newAccount);

    if(result) {
      const response = h.response({
        status: 'success',
        message: 'Player succesfully created',
        data: result,
      });

      response.code(201);

      logger.warn(`[POST] Player with id: ${result.id} is successfully created`);

      return response;
    }

    const response = h.response({
      status: 'failed',
      message: 'Player failed to create',
    });
  
    response.code(500);

    logger.warn(`[POST] Player failed to create`);

    return response;
  } catch (error) {
    logger.error(error);
  }
}

const getAllPlayers = async (request, h) => {
  try {
    const result = await Player.findAll();

    const response = h.response({
      status: 'success',
      data: result,
    })

    response.code(200);

    logger.warn(`[GET] All players are successfully retrieved`);

    return response;
  } catch (error) {
    logger.error(error);
  }
}

const getPlayerById = async (request, h) => {
  try {
      const { id } = request.params;

    const player = await Player.findByPk(id);

    if(player) {
      const response = h.response({
        status: 'success',
        data: player,
      })
    
      response.code(200);

      logger.warn(`[GET] Player with id: ${id} is successfully retrieved`);

      return response;
    }

    const response = h.response({
      status: 'failed',
      message: 'Player not found',
    })

    response.code(404);

    logger.warn(`[GET] Player with id: ${id} is not found`);

    return response;
  } catch (error) {
    logger.error(error);
  }
}

const updatePlayerById = async (request, h) => {
  const { id } = request.params;
  const { name, balance } = request.payload;

  const player = await Player.findByPk(id);

  if(player) {
    player.name = name;
    player.balance = balance;

    await player.save();

    const response = h.response({
      status: 'success',
      message: 'Account balance successfully updated',
      data: player,
    })
  
    response.code(200);

    logger.warn(`[PUT] Account with id: ${id} is successfully updated`);

    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Account not found',
  })

  response.code(404);

  logger.warn(`[PUT] Account with id: ${id} is not found`);

  return response;
}

const deleteAccountById = (request, h) => {
  const { id } = request.params;

  const index = players.findIndex((account) => account.id === parseInt(id));

  if (index !== -1) {
    players.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Account successfully deleted',
    });

    response.code(200);

    logger.warn(`[DELETE] Account with id: ${id} is successfully deleted`);

    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Account not found',
  })

  response.code(404);

  logger.warn(`[DELETE] Account with id: ${id} is not found`);

  return response;
}

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deleteAccountById,
}