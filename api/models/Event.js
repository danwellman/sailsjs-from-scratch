/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    connection: 'eventMongodbServer',
    schema: true,
    tableName: 'event',

  attributes: {
      browser: {
          type: 'string',
          required: 'true'
      },
      os: {
          type: 'string',
          required: 'true'
      },
      type: {
          type: 'string',
          required: 'true'
      }
  }
};

