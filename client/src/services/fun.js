import axios from "axios";

export const getRequest = async (url, params, header) => {
  try {
    const { data } = await axios.get(url, {
      params,
      headers: {
        ...header,
      },
    });
    return {
      success: true,
      message: data.message,
      code: 200,
      data: data.data,
    };
  } catch (error) {
    const statusCode = error.response.status;
    return {
      success: false,
      message: error.response.data.message,
      code: statusCode,
      error: error.response.data,
    };
  }
};

export const postRequest = async (url, params, header) => {
  try {
    const { data } = await axios.post(
      url,
      {
        ...params,
      },
      {
        headers: {
          ...header,
        },
      }
    );
    return {
      success: true,
      message: data.message,
      code: 200,
      data: data.data,
    };
  } catch (error) {
    const statusCode = error.response.status;
    return {
      success: false,
      message: error.response.data.message,
      code: statusCode,
      error: error.response.data,
    };
  }
};
