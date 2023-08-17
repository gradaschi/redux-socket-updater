from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import time
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
socketio = SocketIO(app, cors_allowed_origins='*')

data = {'data': 0}


def send_data():
    while True:
        fake_data = random.randint(1, 100000)
        data['data'] = fake_data
        socketio.emit('message_from_server', data)
        print('Sent fake data:', fake_data)
        socketio.sleep(0.8)


@socketio.on('connect')
def handle_connect():
    print('WebSocket connected')
    emit('message_from_server', data)


@socketio.on('disconnect')
def handle_disconnect():
    print('WebSocket disconnected')


if __name__ == '__main__':
    socketio.start_background_task(target=send_data)
    socketio.run(app, host='0.0.0.0', port=9999)
