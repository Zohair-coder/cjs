const ageDataNumber = [
    { ageGroup: '12 to 14', number: 19782 },
    { ageGroup: '15 to 17', number: 46425 },
    { ageGroup: '18 to 20', number: 83863 },
    { ageGroup: '21 to 24', number: 62073 },
    { ageGroup: '25 to 34', number: 125925 },
    { ageGroup: '35 to 49', number: 96527 },
    { ageGroup: '50 to 64', number: 59092 },
    { ageGroup: '65 or older', number: 38118 },
  ];

  // convert to percent
const sum = ageDataNumber.reduce((acc, curr) => acc + curr.number, 0);
const ageData = ageDataNumber.map((data) => { return {ageGroup: data.ageGroup, number: Math.round(data.number / sum * 100)} })
  
  // // Calculate total number of minor victims (age < 18)
  // const totalMinors = rawData
  //   .filter(d => d.age === '12 to 14' || d.age === '15 to 17')
  //   .reduce((acc, curr) => acc + curr.number, 0);
  
  // // Calculate total number of adult victims (age >= 18)
  // const totalAdults = rawData
  //   .filter(d => d.age !== '12 to 14' && d.age !== '15 to 17')
  //   .reduce((acc, curr) => acc + curr.number, 0);
  
  // // Prepare data for the donut chart
  // const ageData = [
  //   { ageGroup: 'Minors', number: totalMinors },
  //   { ageGroup: 'Adults', number: totalAdults },
  // ];
  
  export default ageData;
  