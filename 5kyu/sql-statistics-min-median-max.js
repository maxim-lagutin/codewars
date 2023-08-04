// ❓ DESCRIPTION:
// For this challenge you need to create a simple SELECT statement. Your task is to calculate the MIN, MEDIAN and MAX scores of the students from the results table.
//
//     Tables and relationship below:
// student:
// *id
// name
//
// result:
// id
// *student_id
// score
//
//     Resultant table:
//     min
// median
// max

// ✅ SOLUTION:
// SELECT min(score) min,
// PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY score ASC) median,
// max(score) max
// FROM result