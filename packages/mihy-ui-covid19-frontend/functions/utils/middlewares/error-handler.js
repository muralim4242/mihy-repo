const errorHandler=(err, req, res) => {
  console.log("error midddleware");
    res.status(500).json({
      status: err.status,
      message: err.message
    });
};

module.exports=errorHandler
