if [ -f .env ]; then
  export $(cat .env | xargs)
fi

curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
-H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
-H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
-H "Content-Type: application/json" \
--data '{"files":["https://www.remotestories.com/index.html"]}'
