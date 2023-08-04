// ❓ DESCRIPTION:
// It's time to assess which of the world's greatest fighters are through to the 6 coveted places in the semi-finals of the Street Fighter World Fighting Championship. Every fight of the year has been recorded and each fighter's wins and losses need to be added up.
//
// Each row of the table fighters records, alongside the fighter's name, whether they won (1) or lost (0), as well as the type of move that ended the bout.
//
// fighters:
// id
// name
// won
// lost
// move_id
//
// winning_moves:
// id
// move
//
// However, due to new health and safety regulations, all ki blasts have been outlawed as a potential fire hazard. Any bout that ended with Hadoken, Shouoken or Kikoken should not be counted in the total wins and losses.
//
//     So, your job:
//
//     Return name, won, and lost columns displaying the name, total number of wins and total number of losses. Group by the fighter's name.
// Do not count any wins or losses where the winning move was Hadoken, Shouoken or Kikoken.
//     Order from most-wins to least
// Return the top 6. Don't worry about ties.


// ✅ SOLUTION:
// SELECT f.name, SUM (f.won) won, SUM (f.lost) lost
// FROM fighters f
// JOIN winning_moves m
// ON f.move_id = m.id
// WHERE m.move NOT IN ('Hadoken','Shouoken','Kikoken')
// GROUP BY f.name
// ORDER BY won DESC
// LIMIT 6;