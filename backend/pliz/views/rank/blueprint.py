from flask import Blueprint, render_template

bp = Blueprint('rank', __name__, url_prefix='/')

@bp.route('/', methods=['GET'])
def rank():
    return render_template('rank/ranklist.html')