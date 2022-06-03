FLASK_APP := pliz/app
FLASK_ENV ?= development

SHELL := /bin/bash

.PHONY: run_local
run_local:
	FLASK_ENV=development FLASK_APP=$(FLASK_APP) flask run

.PHONY: run
run:
	FLASK_ENV=production FLASK_APP=$(FLASK_APP) flask run
