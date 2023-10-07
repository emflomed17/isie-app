const errorMap: Record<string, string> = {
  request_timeout: "The request to OpenAI timed out.",
  invalid_request:
    "The request to OpenAI is invalid. Please check your request data.",
  rate_limited: "You have exceeded the rate limit for API requests.",
  invalid_api_key: "The requesting API key is not correct.",
  authentication_error: "",
  model_not_found: "The specified model does not exist or is not available",
  model_load_failed: "There was an issue loading the model",
  server_error: "An internal server error occurred on the OpenAI side",
  network_error: "There was a network error while making the API request",
  quota_exceeded: "You have exceeded your API usage quota",
  input_limit_exceeded:
    "The input text provided exceeds the maximum length allowed for the model",
};

// Function to map OpenAI error codes to human-readable error messages
export const mapOpenAIError = (errorCode: string) => {
  return errorMap[errorCode] || "An unknown error occurred.";
};
