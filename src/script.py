from flask import Flask, request

app = Flask(__name__)


@app.route('/get_move', methods=['GET'])
def hello():
    board = request.args.get('board').split(',')
    board = [None if val == '' else val for val in board]
    ret = 0
    while board[ret]:
        ret += 1
        if ret > 8:
            return -1
    return f'Move: {ret}!'


if __name__ == '__main__':
    app.run(debug=True)
