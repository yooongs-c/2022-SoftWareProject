from flask import Flask
from sqlalchemy import create_engine
from flask_cors import CORS

from models import UserDao, CommunityDao, PlaylistDao
from services import UserService, CommunityService, PlaylistService
from views import create_endpoints, index_blueprint, community_blueprint, rank_blueprint

class Services:
    pass

def create_app(test_config=None):
    app = Flask(
        __name__,
        static_url_path='/pliz/static',
        static_folder='static',
        template_folder='templates')

    CORS(app)

    if test_config is None:
        app.config.from_pyfile("config.py")
    else:
        app.config.update(test_config)

    database = create_engine(app.config['DB_URL'], encoding='utf-8', max_overflow=0)

    user_dao = UserDao(database)
    community_dao = CommunityDao(database)
    playlist_dao = PlaylistDao(database)

    services = Services
    services.user_service = UserService(user_dao, playlist_dao, app.config)
    services.community_service = CommunityService(community_dao)
    services.playlist_service = PlaylistService(playlist_dao)

    create_endpoints(app, services, app.config)

    app.register_blueprint(index_blueprint.bp)
    app.register_blueprint(community_blueprint.bp)
    app.register_blueprint(rank_blueprint.bp)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)