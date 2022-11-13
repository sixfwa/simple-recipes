import { Handler } from "@netlify/functions";

const handler: Handler = async () => {
  console.log("Welcome serveless function");

  const data = {
    message: "Welcome to the awesome recipe app. For all your cooking needs",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
