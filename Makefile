get-protos:
	git submodule add --progress --force https://github.com/crataristo4/afscommon common

# for older versions of git
update-protos:
	git submodule update --remote --init --recursive

gen-protos:
	@echo "running generator for proto files..." && \
	chmod +x ./scripts/gen-protos.sh && ./scripts/gen-protos.sh

# 137.66.26.56:443
run-gateway:
	@echo "running gateway..." && \
	grpcwebproxy --server_http_debug_port=10000 --backend_addr=137.66.26.56:443 \
	--allow_all_origins --run_tls_server=false --use_websockets \
	--backend_max_call_recv_msg_size=5242880 --websocket_compression_mode=disabled

.PHONY: gen-protos get-protos update-protos run-gateway
