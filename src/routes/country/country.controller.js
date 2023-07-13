import CountryModel from "../../model/country.model.js";

export const getCountries = async (req, res) => {
  try {
    const limit = +req.query.limit || 20;
    const skip = +req.query.skip || 0;
    const { search, region } = req.query;
    let query = {};
    if (search) {
      query["name.common"] = { $regex: `^${search}`, $options: "i" };
    }
    if (region) {
      query["region"] = region;
    }
    const count = await CountryModel.count(query);
    const countries = await CountryModel.find(
      query,
      { __v: 0, _id: 0 },
      { limit, skip }
    );
    res.json({
      countries,
      total: count,
      limit: countries.length,
      skip,
    });
  } catch (error) {
    console.log(error);
  }
};
