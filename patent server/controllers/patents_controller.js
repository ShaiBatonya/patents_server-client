const Patent = require("../models/patent");

module.exports = {
  
  addNewPatent: async (req, res) => {
    try {
      const {
        patent_Number,
        patent_Name,
        patent_inventor,
        patent_description,
      } = req.body;

      const new_Patent = new Patent({
        patent_Number,
        patent_Name,
        patent_inventor,
        patent_description,
      });

      await new_Patent.save();

      return res.status(200).json({
        success: true,
        message: "success to add new patent",
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in add patent request",
        error: error.message,
      });
    }
  },

  getAllPatents: async (req, res) => {
    try {
      const patent = await Patent.find();

      return res.status(200).json({
        success: true,
        message: "success to get all patents",
        patent,
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in get all patents request",
        error: error.message,
      });
    }
  },

  getPatentById: async (req, res) => {
    const patent_id = req.params.patent_id;

    try {
      const patent = await Patent.findById(patent_id);

      return res.status(200).json({
        success: true,
        message: "success to patent by id",
        patent,
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in get patent by id request",
        error: error.message,
      });
    }
  },

  updatePatentById: async (req, res) => {

    
    const patent_id = req.params.patent_id;

    try {

      const {
        patent_Number,
        patent_Name,
        patent_inventor,
        patent_description
    } = req.body;

    if (!patent_Name) {
      throw new Error("must have patent_Name to update in body");
    }

    const obj ={
      patent_Number,patent_Name,patent_inventor,patent_description
    }

    const patent = await Patent.findByIdAndUpdate(patent_id,obj,{new:true});
      

      return res.status(200).json({
        success: true,
        message: "success to update patent by id",
        patent
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in update patent by id request",
        error: error.message,
      });
    }
  },

  deletePatentById: async (req, res) => {
    
    const patent_id = req.params.patent_id;

    try {
      const patent = await Patent.findByIdAndDelete(patent_id);

      if (!patent) {
        throw new Error("not found patent in db to delete");
      }

      return res.status(200).json({
        success: true,
        message: "success to delete user by id",
        patent,
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in delete patent by id request",
        error: error.message,
      });
    }
  },
};
