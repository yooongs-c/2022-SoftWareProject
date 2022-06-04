from flask import Blueprint, render_template

bp = Blueprint('community', __name__, url_prefix='/community')

@bp.route('/information', methods=['GET'])
def information():
    return render_template('community/information.html', contents=[{ 'no': 1, 'title': '예시', 'author': 'Jayce', 'category': '공지사항' }])

@bp.route('/playlist', methods=['GET'])
def playlist():
    return render_template('community/playlist.html')

@bp.route('/information/write', methods=['GET'])
def information_write():
    return render_template('community/write.html')
