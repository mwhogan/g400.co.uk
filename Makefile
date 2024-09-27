build: clean
	npm run build
	cp ai-training-opt-out/robots.txt build

clean:
	rm -rf build
