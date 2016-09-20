. ./scripts/load-env.sh

curl -X GET "https://api.cloudflare.com/client/v4/zones?name=remotestories.com&status=active&page=1&per_page=20&order=status&direction=desc&match=all" \
-H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
-H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
-H "Content-Type: application/json"
