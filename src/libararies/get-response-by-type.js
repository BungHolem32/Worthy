let getResponseByType = (type, records) => {
  let response;
  switch (type) {
    case 'success':
      response = {
        status: 200,
        data: {price: records},
        message: 'calculate the final price of jewelry according to his categories',
      };

      break;

    case 'no found':
      let {error, message} = records;
      response = {status: 202, data: 'null', error, message};

      break;

    case  'unprocessable entity':
      response = {
        status: 422,
        data: null,
        errors: records,
        message: 'you must fix these errors in order to get the response',
      };
  }

  return response;
};

export default getResponseByType;