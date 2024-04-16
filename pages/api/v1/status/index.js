function status(request, response) {
  response.status(200).json({ hello: "world" });
}

export default status;
