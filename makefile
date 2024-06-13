.PHONY: dev test help
.DEFAULT_GOAL: help
.WORKDIR: /app


help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

test: ## Run the app and tests
	@docker-compose up -d
	@docker run -it -w /app -v '$(pwd)':/app node:latest sh -c 'npm test --watchAll'
	