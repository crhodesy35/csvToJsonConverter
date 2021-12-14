const csvs = `person_id,contract_id,sbd_id
40255729,9782,12389184
42635186,9780,11900073
48385594,9781,12054049
76929730,9782,12179417
76966496,9782,12386635
77582659,9781,12062346
77583068,9782,12253116
77584620,9782,12200387
77595923,9781,12090337
80227659,9782,12156621
80872052,9782,12190661
80872076,9782,12383043
80872216,9782,12193147
81364787,9782,12177882`;

function csvConverter(file) {
  const lines = file.split('\n'); //splitting whole string into an array of substrings
  const keys = lines[0].split(','); //splitting the line with keys into arrays containing individual keys
  return lines.slice(1).map((line) => {
    //turning each line into its own object...
    return line.split(',').reduce((agg, csv, i) => {
      //...using "," as delimiter, and reducer modify...
      const value = {}; //.... setting value as the object...
      value[keys[i]] = csv; //... matching value with key based on index position
      return { ...agg, ...value }; //...using aggregator add value to csv on each iteration
    }, {});
  });
}

const csvToJson = csvConverter(csvs);

module.exports = { csvToJson };
