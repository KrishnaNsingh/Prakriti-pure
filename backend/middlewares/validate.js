import { validationResult } from "express-validator";


export const validate = (req, res, next) => {
  const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     message: "Validation failed",
  //     errors: errors.array()
  //   });
  // }
  if (!errors.isEmpty()) {
  console.log("VALIDATION ERRORS:", errors.array());
  return res.status(400).json({
    errors: errors.array()
  });
}
  next();
};
