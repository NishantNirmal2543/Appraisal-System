const express = require("express");
const router = express.Router();
const { Appraisal } = require("../models/appraisal");

// Route to handle updating internationalPatents for an employee
router.put("/:employeeId", async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Find the appraisal document for the employee
    const appraisal = await Appraisal.findOne({ employeeid: employeeId });

    if (!appraisal) {
      console.error(`Appraisal not found for employeeId: ${employeeId}`);
      return res.status(404).json({ error: "Appraisal not found" });
    }

    // Update the internationalPatents field
    appraisal.internationalPatents = req.body.internationalPatents;

    // Save the updated appraisal document
    await appraisal.save();

    console.log(`International patents updated for employeeId: ${employeeId}`);
    return res.status(200).json({
      message: "International patents updated successfully",
      appraisal: appraisal,
    });
  } catch (error) {
    console.error("Error updating international patents:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
