const url = "http://127.0.0.1:5000/get_move?";

export default function get_move(board, player) {
    let query = url;
    for (const square of board) {
        query = query.concat(square + ",");
    }
    query.slice(0, -1);
    fetch(query)
    .then(response => console.log(response))
    .catch(error => console.error(error));
    return response; // the index of the square where the AI wants to move next
  }